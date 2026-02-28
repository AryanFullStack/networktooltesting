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
  const TIMEOUT_MS = 10000; // 10 seconds max duration
  let bestMbps = 0;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`https://speed.cloudflare.com/__down?bytes=250000000`, {
      cache: 'no-store',
      signal: controller.signal
    });

    if (response.body) {
      const reader = response.body.getReader();
      let receivedBytes = 0;
      const start = performance.now();

      while (true) {
        const { done, value } = await reader.read();

        if (value) {
          receivedBytes += value.length;
          const elapsed = (performance.now() - start) / 1000; // seconds

          if (elapsed > 0.05) { // Wait 50ms to stabilize
            const bitsReceived = receivedBytes * 8;
            const mbps = (bitsReceived / elapsed) / (1024 * 1024);

            bestMbps = mbps; // We track the cumulative average

            if (onProgress) {
              onProgress(Math.round(bestMbps * 100) / 100);
            }
          }
        }

        if (done) break;
      }
    }
  } catch (error: any) {
    if (error.name !== 'AbortError') {
      console.error('Download measurement failed:', error);
    }
  } finally {
    clearTimeout(timeoutId);
  }

  return Math.round(bestMbps * 100) / 100;
}

/**
 * Measure upload speed (simulated with POST requests)
 */
export async function measureUpload(onProgress?: (mbps: number) => void): Promise<number> {
  const TIMEOUT_MS = 10000; // 10 seconds max duration
  let bestMbps = 0;

  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    const start = performance.now();
    let hasReturned = false;

    const finalize = () => {
      if (!hasReturned) {
        hasReturned = true;
        resolve(Math.round(bestMbps * 100) / 100);
      }
    };

    const timeoutId = setTimeout(() => {
      xhr.abort();
      finalize();
    }, TIMEOUT_MS);

    xhr.upload.onprogress = (event) => {
      if (event.loaded > 0) {
        const elapsed = (performance.now() - start) / 1000;
        if (elapsed > 0.05) {
          const bitsUploaded = event.loaded * 8;
          bestMbps = (bitsUploaded / elapsed) / (1024 * 1024);
          if (onProgress) {
            onProgress(Math.round(bestMbps * 100) / 100);
          }
        }
      }
    };

    xhr.onload = () => {
      clearTimeout(timeoutId);
      finalize();
    };

    xhr.onerror = () => {
      clearTimeout(timeoutId);
      finalize();
    };

    // 50MB payload
    const sizeBytes = 50 * 1024 * 1024;
    const data = new Uint8Array(sizeBytes);
    // Fill first few KB to avoid compression artifacts, rest can be zero
    for (let i = 0; i < Math.min(sizeBytes, 1024 * 1024); i += 1024) {
      data[i] = Math.random() * 255;
    }

    xhr.open('POST', 'https://speed.cloudflare.com/__up', true);
    xhr.setRequestHeader('Cache-Control', 'no-store');
    xhr.send(data);
  });
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
