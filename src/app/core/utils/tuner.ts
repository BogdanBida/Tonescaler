export function autoCorrelate(
  buffer: Float32Array,
  sampleRate: number
): number {
  const MAX_SAMPLES = Math.floor(buffer.length / 2);
  const correlations = new Array(MAX_SAMPLES);
  let bestOffset = -1;
  let bestCorrelation = 0;
  let isFoundGoodCorrelation = false;

  if (getRMS(buffer) < MIN_RMS_LIMIT) {
    return -1;
  }

  let lastCorrelation = 1;

  for (let offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
    let correlation = 0;

    for (let i = 0; i < MAX_SAMPLES; i++) {
      correlation += Math.abs(buffer[i] - buffer[i + offset]);
    }
    correlation = 1 - correlation / MAX_SAMPLES;
    correlations[offset] = correlation; // store it, for the tweaking we need to do below.

    if (
      correlation > GOOD_ENOUGH_CORRELATION &&
      correlation > lastCorrelation
    ) {
      isFoundGoodCorrelation = true;

      if (correlation > bestCorrelation) {
        bestCorrelation = correlation;
        bestOffset = offset;
      }
    } else if (isFoundGoodCorrelation) {
      const shift =
        (correlations[bestOffset + 1] - correlations[bestOffset - 1]) /
        correlations[bestOffset];

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      return sampleRate / (bestOffset + 8 * shift);
    }

    lastCorrelation = correlation;
  }

  if (bestCorrelation > CORRELATION_LIMIT) {
    return sampleRate / bestOffset;
  }

  return -1;
}

function getRMS(buffer: Float32Array): number {
  let rms = 0;
  const bufferSize = buffer.length;

  for (let i = 0; i < bufferSize; i++) {
    rms += Math.pow(buffer[i], 2);
  }

  return Math.sqrt(rms / bufferSize);
}

/**
 * minimum RMS volume limit at which you need to listen to the stream
 */
const MIN_RMS_LIMIT = 0.0001;
/**
 * will be initialized when AudioContext is created.
 */
const MIN_SAMPLES = 0;
/**
 * this is the "bar" for how close a correlation needs to be
 */
const GOOD_ENOUGH_CORRELATION = 0.9;

const CORRELATION_LIMIT = 0.1;
