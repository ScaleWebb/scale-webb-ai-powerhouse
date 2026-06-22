interface BrandProps {
  light?: boolean;
}

const Brand = ({ light = true }: BrandProps) => (
  <a href="#top" className="inline-flex items-center gap-3" aria-label="Scale Webb home">
    <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_0_28px_rgba(155,93,229,0.2)]">
      <img src="/favicon.png" alt="" className="h-full w-full object-cover" />
    </span>
    <span
      className={`font-display text-[18px] font-semibold tracking-[-0.04em] ${
        light ? "text-white" : "text-ink"
      }`}
    >
      ScaleWebb
    </span>
  </a>
);

export default Brand;
