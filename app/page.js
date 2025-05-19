'use client';

import { Instagram, Mail, Github, Twitter, Link2, Sparkles, QuoteIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const links = [
    { icon: <Link2 size={18} />, label: 'My Portfolio', url: 'https://sanzy.dev' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://instagram.com/sanzy' },
    { icon: <Mail size={18} />, label: 'Email Me', url: 'mailto:sanzy@email.com' },
    { icon: <QuoteIcon size={18} />, label: 'Link Apapun Bisa', url: '#' },
  ];

  const socials = [
    { icon: <Github size={20} />, url: 'https://github.com/sanzy' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/sanzy' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden px-4">

      {/* BACKGROUND SHAPES */}
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
      <div className="absolute w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* ICON DECOR */}
      <Sparkles className="absolute top-10 right-6 text-pink-400 opacity-50 animate-ping-slow" />
      <Sparkles className="absolute bottom-10 left-8 text-cyan-300 opacity-40 animate-pulse" />

      {/* GLASS CARD */}
      <div className="relative z-10 max-w-md w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] p-8 text-center space-y-6 text-white">

        {/* Avatar */}
        <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-4 border-white/10 shadow-xl hover:scale-105 transition">
          <Image 
            src="/images/p1.jpg" 
            alt="Sanzy" 
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
            NamaAnda
          </h1>
          <p className="text-sm text-gray-300 mt-1">Creative Dev • Design Enthusiast • UI Sorcerer ✨</p>
        </div>

        {/* Link Buttons */}
        <div className="space-y-3">
          {links.map(({ icon, label, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md shadow hover:shadow-xl transition text-white font-medium"
            >
              {icon} {label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-4 pt-2">
          {socials.map(({ icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white transition transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400 pt-4">Built by Sanzystore — Glass never looked this good 🧊</p>
      </div>
    </main>
  );
}