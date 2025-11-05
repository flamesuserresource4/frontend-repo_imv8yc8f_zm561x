import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
          <Rocket className="h-4 w-4 text-cyan-400" /> Tech • Sales • Repairs • Mobile
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Your One‑Stop Computer & Mobile Shop
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          Shop the latest PCs, laptops, and accessories. Fast, reliable repair services for computers and smartphones. Expert advice, trusted support.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#catalog" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
            <ShoppingCart className="h-5 w-5" /> Browse Products
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
            Get Instant Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
