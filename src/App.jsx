import React from 'react';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Services from './components/Services';
import ContactChat from './components/ContactChat';
import { Store } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Store className="h-5 w-5 text-cyan-400" />
            <span>BlueTech Computers</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
            <a href="#catalog" className="hover:text-white">Shop</a>
            <a href="#services" className="hover:text-white">Repairs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Get Help</a>
        </div>
      </header>

      <main>
        <Hero />
        <Catalog />
        <Services />
        <ContactChat />
      </main>

      <footer className="border-t border-white/10 bg-slate-900/60 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-300">
          <p>© {new Date().getFullYear()} BlueTech Computers — Sales • Accessories • Repairs • Mobile</p>
          <p className="mt-1">Prices and availability subject to change. Contact us for latest stock.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
