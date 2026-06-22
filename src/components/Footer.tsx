import Brand from "./Brand";

const Footer = () => (
  <footer className="bg-[#07090d] py-10 text-white">
    <div className="section-shell flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
        <Brand />
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/[0.35]">
          Operating technology holding / Company factory
        </p>
      </div>
      <div className="flex flex-col justify-between gap-3 text-xs text-white/[0.35] sm:flex-row">
        <p>ScaleWebb. Milan, Italy.</p>
        <p>Copyright {new Date().getFullYear()} ScaleWebb. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
