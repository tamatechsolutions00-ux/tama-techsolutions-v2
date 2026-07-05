import Link from "next/link";
import {
  Users,
  BadgeDollarSign,
  Rocket,
  Headphones,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Users,
      title: "Experienced Development Team",
      desc: "Professional developers, designers and software engineers delivering high-quality digital solutions.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable & Transparent Pricing",
      desc: "Flexible pricing plans for startups, schools, hospitals, hotels and growing businesses.",
    },
    {
      icon: Rocket,
      title: "Fast Project Delivery",
      desc: "Agile development process that ensures faster launch and quicker business growth.",
    },
    {
      icon: Headphones,
      title: "24/7 Support & Maintenance",
      desc: "Dedicated technical support, updates and maintenance whenever you need assistance.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable Solutions",
      desc: "Enterprise-level security, data protection and scalable infrastructure for long-term success.",
    },
    {
      icon: Cpu,
      title: "AI-Powered Innovation",
      desc: "Modern AI automation, intelligent chatbots and smart business solutions to boost productivity.",
    },
  ];

  const highlights = [
    "Business Website",
    "Mobile Application",
    "ERP Software",
    "School Management System",
    "Hospital Software",
    "AI Automation",
  ];

  return (
    <section className="relative overflow-hidden bg-[#020b35] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute -right-28 bottom-10 h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
            WHY CHOOSE TAMA TECHSOLUTIONS
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Trusted Technology Partner
            <span className="block text-cyan-400">For Your Business</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
            We build powerful websites, mobile apps, ERP systems, AI automation
            tools and custom software solutions that help businesses operate
            smarter, grow faster and serve customers better.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_50px_rgba(6,182,212,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 transition group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-blue-100">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-950/60 to-blue-500/10 p-6 shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur-2xl md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-3xl font-black md:text-4xl">
                Ready To Transform Your Business?
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                Whether you need a business website, mobile application, ERP
                software, school management system, hospital software or AI
                automation, TAMA TECHSOLUTIONS can help you build the right
                solution.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-black text-black transition hover:bg-cyan-400"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}