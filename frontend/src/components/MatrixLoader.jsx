const VARIANT_DELAYS = {
  scan: [0, 120, 240, 360, 0, 120, 240, 360, 0, 120, 240, 360, 0, 120, 240, 360],
  twinkle: [7, 2, 11, 5, 14, 9, 0, 12, 3, 15, 6, 10, 13, 1, 8, 4].map((value) => value * 75),
  orbit: [1, 2, 7, 11, 14, 13, 8, 4].reduce((delays, position, index) => {
    delays[position] = index * 150;
    return delays;
  }, Array(16).fill(900)),
  pulse: Array.from({ length: 16 }, (_, index) => ([5, 6, 9, 10].includes(index) ? 0 : 192)),
};

const GAP_POSITIONS = new Set([0, 3, 12, 15]);

export default function MatrixLoader({ variant = 'scan', rounded = false, label = 'Working' }) {
  const delays = VARIANT_DELAYS[variant] || VARIANT_DELAYS.scan;

  return (
    <span className="matrix-loader" role="status" aria-label={label}>
      <span className={`t-matrix ${rounded ? 'is-rounded' : ''}`} aria-hidden="true">
        {delays.map((delay, index) => (
          <i key={index} className={rounded && GAP_POSITIONS.has(index) ? 'is-gap' : ''} style={{ '--d': delay }} />
        ))}
      </span>
      <span className="matrix-loader-label">{label}</span>
    </span>
  );
}
