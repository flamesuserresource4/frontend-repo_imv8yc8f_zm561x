import React from 'react';
import { Monitor, Smartphone, Headphones, Cpu, Keyboard, MousePointerClick } from 'lucide-react';

const products = [
  {
    title: 'Laptops & PCs',
    icon: Monitor,
    desc: 'Gaming rigs, creator laptops, office PCs – optimized for performance and reliability.',
    items: ['Gaming Laptops', 'Ultrabooks', 'Custom PCs', 'All-in-One']
  },
  {
    title: 'Smartphones',
    icon: Smartphone,
    desc: 'Latest Android and iOS phones with official warranties and accessories.',
    items: ['Flagship Phones', 'Budget Phones', 'Refurbished', 'Trade‑In']
  },
  {
    title: 'Accessories',
    icon: Headphones,
    desc: 'Keyboards, mice, headsets, speakers, webcams, and more.',
    items: ['Mechanical Keyboards', 'Gaming Mice', 'Headsets', 'Monitors']
  },
  {
    title: 'Components',
    icon: Cpu,
    desc: 'Build or upgrade with GPUs, CPUs, SSDs, RAM, PSUs, and cases.',
    items: ['GPUs', 'CPUs', 'RAM', 'SSD & Storage']
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Shop Our Best‑Sellers</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Explore top categories in computers, mobiles, and accessories. Visit in‑store or chat for custom builds and availability.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-900 shadow shadow-cyan-500/30 transition hover:bg-cyan-400">
            <MousePointerClick className="h-4 w-4" /> Ask About Stock
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ title, icon: Icon, desc, items }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-900/60 p-6 transition hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
