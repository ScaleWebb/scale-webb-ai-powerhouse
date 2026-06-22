import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="hero-grid flex min-h-screen items-center">
    <div className="section-shell relative z-10 py-32">
      <p className="eyebrow">404 / Page not found</p>
      <h1 className="mt-8 max-w-4xl font-display text-6xl font-medium tracking-[-0.06em] text-white md:text-8xl">
        This page is outside our orbit.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
        The address may have changed, or the page may no longer be available.
      </p>
      <Link to="/" className="button-primary mt-10">
        <ArrowLeft size={16} />
        Return home
      </Link>
    </div>
  </main>
);

export default NotFound;
