/**
 * Speed test utilities for measuring network performance
 */

export type TestPhase = 'idle' | 'connecting' | 'ping' | 'download' | 'upload' | 'complete' | 'error';

export interface SpeedTestResult {
  ping: number; // milliseconds
  download: number; // Mbps
  upload: number; // Mbps
  timestamp: Date;
}

export interface TestProgress {
  phase: TestPhase;
  progress: number; // 0-100
  currentValue?: number;
}

// Test servers - using reliable CDN endpoints
const TEST_SERVERS = [
  'https://cloudflare.com/cdn-cgi/trace',
  'https://speed.cloudflare.com/__down?bytes=',
];

/**
 * Measure ping latency
 */
export async function measurePing(onProgress?: (value: number) => void): Promise<number> {
  const measurements: number[] = [];
  const iterations = 5;

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    try {
      await fetch('https://cloudflare.com/cdn-cgi/trace', { 
        method: 'HEAD',
        cache: 'no-cache'
      });
      const end = performance.now();
      const latency = end - start;
      measurements.push(latency);
      
      if (onProgress) {
        onProgress(latency);
      }
      
      // Small delay between measurements
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Ping measurement failed:', error);
    }
  }

  // Return median to avoid outliers
  measurements.sort((a, b) => a - b);
  return Math.round(measurements[Math.floor(measurements.length / 2)]);
}

/**
 * Measure download speed
 */
export async function measureDownload(onProgress?: (mbps: number) => void): Promise<number> {
  const fileSizes = [1, 5, 10, 25]; // MB
  const measurements: number[] = [];

  for (const sizeMB of fileSizes) {
    const sizeBytes = sizeMB * 1024 * 1024;
    const start = performance.now();
    
    try {
      const response = await fetch(`https://speed.cloudflare.com/__down?bytes=${sizeBytes}`, {
        cache: 'no-cache'
      });
      
      if (!response.body) continue;
      
      const reader = response.body.getReader();
      let receivedBytes = 0;
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        receivedBytes += value.length;
        const elapsed = (performance.now() - start) / 1000; // seconds
        
        if (elapsed > 0) {
          const bitsReceived = receivedBytes * 8;
          const mbps = (bitsReceived / elapsed) / (1024 * 1024);
          
          if (onProgress) {
            onProgress(Math.round(mbps * 100) / 100);
          }
        }
      }
      
      const end = performance.now();
      const duration = (end - start) / 1000; // seconds
      const bitsDownloaded = receivedBytes * 8;
      const mbps = (bitsDownloaded / duration) / (1024 * 1024);
      
      measurements.push(mbps);
      
    } catch (error) {
      console.error('Download measurement failed:', error);
    }
  }

  // Return average of measurements
  const avg = measurements.reduce((a, b) => a + b, 0) / measurements.length;
  return Math.round(avg * 100) / 100;
}

/**
 * Measure upload speed (simulated with POST requests)
 */
export async function measureUpload(onProgress?: (mbps: number) => void): Promise<number> {
  const fileSizes = [0.5, 1, 2, 5]; // MB
  const measurements: number[] = [];

  for (const sizeMB of fileSizes) {
    const sizeBytes = sizeMB * 1024 * 1024;
    const data = new Uint8Array(sizeBytes);
    
    // Fill with random data
    for (let i = 0; i < data.length; i += 1024) {
      data[i] = Math.random() * 255;
    }
    
    const start = performance.now();
    
    try {
      await fetch('https://speed.cloudflare.com/__up', {
        method: 'POST',
        body: data,
        cache: 'no-cache',
      });
      
      const end = performance.now();
      const duration = (end - start) / 1000; // seconds
      const bitsUploaded = sizeBytes * 8;
      const mbps = (bitsUploaded / duration) / (1024 * 1024);
      
      measurements.push(mbps);
      
      if (onProgress) {
        onProgress(Math.round(mbps * 100) / 100);
      }
      
    } catch (error) {
      console.error('Upload measurement failed:', error);
    }
  }

  // Return average of measurements
  const avg = measurements.reduce((a, b) => a + b, 0) / measurements.length;
  return Math.round(avg * 100) / 100;
}

/**
 * Run complete speed test
 */
export async function runSpeedTest(
  onProgress: (progress: TestProgress) => void
): Promise<SpeedTestResult> {
  try {
    // Connecting phase
    onProgress({ phase: 'connecting', progress: 0 });
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Ping test
    onProgress({ phase: 'ping', progress: 20 });
    const ping = await measurePing((value) => {
      onProgress({ phase: 'ping', progress: 20, currentValue: value });
    });
    
    // Download test
    onProgress({ phase: 'download', progress: 40 });
    const download = await measureDownload((mbps) => {
      onProgress({ phase: 'download', progress: 40, currentValue: mbps });
    });
    
    // Upload test
    onProgress({ phase: 'upload', progress: 70 });
    const upload = await measureUpload((mbps) => {
      onProgress({ phase: 'upload', progress: 70, currentValue: mbps });
    });
    
    // Complete
    onProgress({ phase: 'complete', progress: 100 });
    
    return {
      ping,
      download,
      upload,
      timestamp: new Date(),
    };
  } catch (error) {
    onProgress({ phase: 'error', progress: 0 });
    throw error;
  }
}

/**
 * Get user's IP and ISP info
 */
export async function getConnectionInfo(): Promise<{
  ip: string;
  isp: string;
  location: string;
}> {
  try {
    const response = await fetch('https://cloudflare.com/cdn-cgi/trace');
    const text = await response.text();
    const lines = text.split('\n');
    const data: Record<string, string> = {};
    
    lines.forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        data[key] = value;
      }
    });
    
    return {
      ip: data.ip || 'Unknown',
      isp: 'ISP Information Not Available',
      location: data.loc || 'Unknown',
    };
  } catch (error) {
    return {
      ip: 'Unable to detect',
      isp: 'Unable to detect',
      location: 'Unable to detect',
    };
  }
}
