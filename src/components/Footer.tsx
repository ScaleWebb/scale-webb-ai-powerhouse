const Footer = () => (
  <footer className="bg-[#080b0f] py-10 text-white">
    <div className="section-shell flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="font-display text-lg font-semibold tracking-[-0.03em]">Scale Webb</span>
        </a>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/[0.35]">Technology holding / Venture studio</p>
      </div>
      <div className="flex flex-col justify-between gap-3 text-xs text-white/[0.35] sm:flex-row">
        <p>Scale Webb. Milan, Italy.</p>
        <p>Copyright {new Date().getFullYear()} Scale Webb. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
