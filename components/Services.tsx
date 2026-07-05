import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      image: "/business.png",
      desc: "Scalable business software tailored to your workflow.",
      points: ["CRM & ERP", "Business Automation", "Secure Dashboard"],
    },
    {
      title: "Mobile App Development",
      image: "/mobile_app.png",
      desc: "Android and iOS apps with modern UI and high performance.",
      points: ["Android Apps", "Customer Apps", "Admin Panels"],
    },
    {
      title: "Website Development",
      image: "/website.png",
      desc: "Business, portfolio, e-commerce and enterprise websites.",
      points: ["Fast Loading", "SEO Ready", "Responsive UI"],
    },
    {
      title: "AI Automation Solutions",
      image: "/ai.png",
      desc: "AI chatbots, automation and business intelligence tools.",
      points: ["AI Chatbot", "Workflow Automation", "Smart Reports"],
    },
    {
      title: "ERP & Management Systems",
      image: "/dashboard.png",
      desc: "School, hospital, hotel and inventory management software.",
      points: ["School ERP", "Hospital System", "Hotel Software"],
    },
    {
      title: "Support & Maintenance",
      image: "/restaurant.png",
      desc: "Regular updates, security monitoring and technical support.",
      points: ["Bug Fixing", "Updates", "Technical Support"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07195f] py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute -right-28 bottom-10 h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Premium IT Services
            <span className="block text-cyan-400">For Business Growth</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
            TAMA TECHSOLUTIONS delivers modern software, websites, mobile
            applications, ERP systems and AI-powered solutions designed to help
            businesses grow faster and operate smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_50px_rgba(6,182,212,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/35">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="h-20 w-auto object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>

                <p className="mt-3 leading-7 text-blue-100">{service.desc}</p>

                <div className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                      <span className="text-sm text-blue-100">{point}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 font-black text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-950/60 to-blue-500/10 p-6 text-center shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur-2xl md:p-10">
          <h3 className="text-3xl font-black md:text-4xl">
            Need a Custom Solution?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-100">
            Whether you need a website, mobile app, ERP software, AI assistant
            or complete business automation, our team can build a solution
            tailored to your needs.
          </p>

          <Link
            href="#contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-black text-black transition hover:bg-cyan-400"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}