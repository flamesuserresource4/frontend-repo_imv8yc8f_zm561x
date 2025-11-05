import React from 'react';
import { Wrench, ShieldCheck, Clock, RefreshCw, HardDrive, Bug, Smartphone, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'PC & Laptop Repairs',
    icon: Wrench,
    desc: 'Diagnostics, hardware replacement, upgrades, OS reinstall, cleaning.'
  },
  {
    title: 'Phone Repairs',
    icon: Smartphone,
    desc: 'Screen, battery, charging port, camera, water damage recovery.'
  },
  {
    title: 'Data & Storage',
    icon: HardDrive,
    desc: 'Data recovery, SSD/HDD upgrades, secure backup & migration.'
  },
  {
    title: 'Virus & Tune‑Up',
    icon: Bug,
    desc: 'Malware removal, optimization, thermal service, software setup.'
  }
];

const perks = [
  { icon: ShieldCheck, text: 'Genuine Parts & Warranty' },
  { icon: Clock, text: 'Same‑Day Quick Fix Options' },
  { icon: RefreshCw, text: 'Trade‑In & Upgrade Programs' },
  { icon: MonitorSmartphone, text: 'Cross‑Device Support' }
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Professional Repair Services</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Trusted technicians for computers and mobiles. Transparent pricing, fast turnaround, and guaranteed quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 ring-1 ring-white/5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/10 p-3 ring-1 ring-emerald-400/30">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Icon className="h-5 w-5 text-cyan-400" />
              <p className="text-sm text-slate-200">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
