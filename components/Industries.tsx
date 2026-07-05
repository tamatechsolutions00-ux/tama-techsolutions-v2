import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Schools & Colleges",
      image: "/industries/school_s.png",
      desc: "School ERP, attendance, fees, exam and student management.",
    },
    {
      title: "Coaching Institutes",
      image: "/industries/coaching_s.png",
      desc: "Admission, batch, fees and online learning solutions.",
    },
    {
      title: "Restaurants & Cafes",
      image: "/industries/cafe_s.png",
      desc: "POS billing, inventory and customer management.",
    },
    {
      title: "Hotels & Resorts",
      image: "/industries/hotel_s.png",
      desc: "Booking, room management and hotel ERP solutions.",
    },
    {
      title: "Retail Businesses",
      image: "/industries/retailshop_s.png",
      desc: "Billing, inventory, sales and stock management.",
    },
    {
      title: "Hospitals & Clinics",
      image: "/industries/hospital_s.png",
      desc: "Patient records, billing and hospital management.",
    },
    {
      title: "Startups & MSMEs",
      image: "/industries/startstup_s.png",
      desc: "Websites, apps, ERP and business automation.",
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#020b35] py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute -right-28 bottom-10 h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
            <Building2 className="h-4 w-4" />
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Digital Solutions For
            <span className="block text-cyan-400">Every Industry</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
            TAMA TECHSOLUTIONS provides software, websites, mobile
            applications, ERP systems and AI-powered solutions across multiple
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_50px_rgba(6,182,212,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/35">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={120}
                    height={120}
                    className="h-20 w-auto object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 text-center text-xl font-black">
                  {industry.title}
                </h3>

                <p className="mt-3 text-center text-sm leading-7 text-blue-100">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 shadow-[0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <div className="relative z-10 flex h-full min-h-[245px] flex-col justify-between">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black">
                  <ArrowRight className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Your Industry
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Need custom software for another business type? We can build
                  it for your exact workflow.
                </p>
              </div>

              <Link
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-black text-black transition hover:bg-cyan-400"
              >
                Consult Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-950/60 to-blue-500/10 p-6 shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur-2xl md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-3xl font-black md:text-4xl">
                One Technology Partner For Every Industry
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                Whether you run a school, hospital, hotel, retail shop,
                coaching institute, startup or enterprise, TAMA TECHSOLUTIONS
                can build custom software, websites, mobile apps and AI
                automation tools tailored to your business needs.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Custom Workflow", "Secure System", "Growth Ready"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      <span className="text-sm text-blue-100">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-black text-black transition hover:bg-cyan-400"
            >
              Request Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}