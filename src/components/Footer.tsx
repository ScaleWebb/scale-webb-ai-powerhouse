const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 py-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-foreground">
        Scale<span className="text-primary">Webb</span>
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scale Webb S.p.A. — All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
