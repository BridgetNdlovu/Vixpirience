export default function BrandLogo({ size = 30 }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" width={size} height={size}>
        <path d="M2 30 Q10 8 16 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M14 30 Q22 4 28 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.65" />
        <path d="M26 30 Q32 14 38 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
      </svg>
    </span>
  );
}
