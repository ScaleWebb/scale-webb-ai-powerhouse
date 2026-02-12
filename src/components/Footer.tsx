import logoImg from "@/assets/scalewebb-logo.png";

const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 py-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-white">
        <img src={logoImg} alt="ScaleWebb logo" className="h-8 w-auto invert" />
        ScaleWebb
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scale Webb S.p.A. — All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
