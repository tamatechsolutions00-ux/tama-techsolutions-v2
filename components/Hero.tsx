import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  const badges = [
    "ERP Solutions",
    "Mobile Apps",
    "Websites",
    "AI Automation",
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#020b35] via-[#07195f] to-[#020b35] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-[160px]" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-blue-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb33,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-16 md:py-20 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Software • Mobile Apps • Websites • AI Solutions
            </div>

            <h1 className="mt-7 text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-[5.3rem]">
              TAMA
              <span className="block text-cyan-400">TECHSOLUTIONS</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              We build powerful business software, mobile apps, ERP systems, AI
              automation and high-converting websites for schools, hospitals,
              hotels, coaching institutes, retail shops and startups.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-black text-cyan-400">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-blue-100">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-black text-black shadow-[0_0_35px_rgba(6,182,212,0.35)] transition hover:bg-cyan-400"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="https://wa.me/918603388869?text=Hello%20TAMA%20TECHSOLUTIONS%2C%20I%20want%20to%20discuss%20my%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-400 px-7 py-4 font-black text-green-300 transition hover:bg-green-400 hover:text-black"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-blue-100">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              Free consultation • Secure development • Long-term support
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px]">
              <div className="pointer-events-none absolute -inset-5 rounded-[34px] bg-cyan-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-slate-950/60 p-3 shadow-[0_0_90px_rgba(6,182,212,0.22)] backdrop-blur-2xl md:p-4">
                <Image
                  src="/dashboard.png"
                  alt="TAMA TECHSOLUTIONS Dashboard"
                  width={1400}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[26px] object-cover"
                />

                <div className="absolute left-5 top-5 hidden rounded-2xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl md:block">
                  <p className="text-xs text-cyan-300">Live Projects</p>
                  <h3 className="text-2xl font-black">38</h3>
                </div>

                <div className="absolute bottom-5 right-5 hidden rounded-2xl border border-green-400/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl md:block">
                  <p className="text-xs text-green-300">System Status</p>
                  <h3 className="text-lg font-black text-green-300">Online</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}