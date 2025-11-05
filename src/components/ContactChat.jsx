import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Navigation, Send, X } from 'lucide-react';

const QuickContactCard = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <a
      href="tel:+1234567890"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 ring-1 ring-white/5 transition hover:border-cyan-400/40"
    >
      <div className="rounded-lg bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
        <Phone className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Call Us</p>
        <p className="text-xs text-slate-300">+1 (234) 567‑890</p>
      </div>
    </a>

    <a
      href="mailto:sales@computershop.example"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 ring-1 ring-white/5 transition hover:border-emerald-400/40"
    >
      <div className="rounded-lg bg-emerald-500/10 p-2 ring-1 ring-emerald-400/30">
        <Mail className="h-5 w-5 text-emerald-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Email</p>
        <p className="text-xs text-slate-300">sales@computershop.example</p>
      </div>
    </a>

    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 ring-1 ring-white/5 transition hover:border-green-400/40"
    >
      <div className="rounded-lg bg-green-500/10 p-2 ring-1 ring-green-400/30">
        <MessageCircle className="h-5 w-5 text-green-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">WhatsApp</p>
        <p className="text-xs text-slate-300">Instant chat</p>
      </div>
    </a>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      q: 'Do you offer same‑day repairs?',
      a: 'Yes, many issues like battery, screen, and SSD/RAM upgrades can be done same‑day depending on parts stock.'
    },
    {
      q: 'Do products come with warranty?',
      a: 'All new products carry official manufacturer warranty. Repairs include a service warranty on parts/labor.'
    },
    {
      q: 'Can you build a custom PC?',
      a: 'Absolutely. Tell us your budget and use‑case; we’ll propose parts and assemble with burn‑in testing.'
    }
  ];
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      {faqs.map(({ q, a }) => (
        <div key={q} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="font-medium text-white">{q}</p>
          <p className="mt-2 text-sm text-slate-300">{a}</p>
        </div>
      ))}
    </div>
  );
};

const useChatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m your shop assistant. Ask about products, repairs, stock, or hours.' }
  ]);

  const patterns = useMemo(
    () => [
      { k: ['hour', 'open', 'close', 'time'], r: 'We\'re open Mon‑Sat 10:00–20:00, Sun 11:00–17:00.' },
      { k: ['warranty', 'guarantee'], r: 'New items have manufacturer warranty. Repairs include parts & labor warranty.' },
      { k: ['repair', 'fix', 'screen', 'battery', 'water'], r: 'We repair laptops and phones. Many fixes are same‑day. Tell me your device and issue.' },
      { k: ['stock', 'available', 'availability'], r: 'Stock changes quickly. Share the model and we\'ll confirm instantly via WhatsApp or phone.' },
      { k: ['custom', 'build', 'pc'], r: 'We design custom PCs for gaming/creation/office with burn‑in testing. What\'s your budget?' }
    ],
    []
  );

  const respond = (userText) => {
    const t = userText.toLowerCase();
    const hit = patterns.find((p) => p.k.some((kw) => t.includes(kw)));
    return hit?.r || "Thanks! A specialist will follow up shortly. You can also call us or WhatsApp for instant help.";
  };

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: respond(trimmed) }]);
    }, 400);
  };

  return { messages, send };
};

const FloatingChat = () => {
  const { messages, send } = useChatbot();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (open && endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              <p className="text-sm font-semibold text-white">Live Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded p-1 text-slate-300 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === 'user' ? 'bg-cyan-500 text-slate-900' : 'bg-white/10 text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
              setInput('');
            }}
            className="flex items-center gap-2 border-t border-white/10 p-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button type="submit" className="rounded-lg bg-cyan-500 p-2 text-slate-900 hover:bg-cyan-400">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
      >
        <MessageCircle className="h-5 w-5" /> Chat
      </button>
    </div>
  );
};

const ContactChat = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Instant Contact</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Reach us instantly by phone, email, or WhatsApp. Share your device model and issue for fastest assistance.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Computer+Shop"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/20 sm:inline-flex"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
        </div>

        <QuickContactCard />
        <FAQ />
      </div>

      <FloatingChat />
    </section>
  );
};

export default ContactChat;
