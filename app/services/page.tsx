import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  Cloud,
  Code2,
  DatabaseZap,
  GraduationCap,
  Headphones,
  Hotel,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      image: "/Software Development.png",
      title: "Software Development",
      desc: "Custom ERP, CRM, management systems and enterprise business automation solutions.",
      features: [
        "ERP Development",
        "CRM Systems",
        "Inventory Management",
        "Business Automation",
      ],
      link: "/contact",
      icon: Code2,
      accent: "from-cyan-400/20 to-blue-500/10",
    },
    {
      image: "/Website Development.png",
      title: "Website Development",
      desc: "Modern responsive websites optimized for speed, SEO and conversions.",
      features: [
        "Corporate Websites",
        "Business Portals",
        "Landing Pages",
        "SEO Optimization",
      ],
      link: "/contact",
      icon: MonitorSmartphone,
      accent: "from-sky-400/20 to-cyan-500/10",
    },
    {
      image: "/Mobile App Development.png",
      title: "Mobile App Development",
      desc: "Premium Android and iOS applications with powerful user experiences.",
      features: [
        "Android Apps",
        "iOS Apps",
        "Admin Panel",
        "Push Notifications",
      ],
      link: "/contact",
      icon: Smartphone,
      accent: "from-emerald-400/20 to-cyan-500/10",
    },
    {
      image: "/AI-Solutions.png",
      title: "AI Solutions",
      desc: "Intelligent AI systems that automate workflows and increase productivity.",
      features: [
        "AI Chatbots",
        "Business Automation",
        "AI Assistants",
        "Smart Analytics",
      ],
      link: "/contact",
      icon: Bot,
      accent: "from-violet-400/20 to-cyan-500/10",
    },
    {
      image: "/School ERP.png",
      title: "School ERP",
      desc: "Complete digital ecosystem for schools, colleges and coaching institutes.",
      features: [
        "Student Management",
        "Fee Management",
        "Attendance",
        "Parent Portal",
      ],
      link: "/contact",
      icon: GraduationCap,
      accent: "from-amber-300/20 to-cyan-500/10",
    },
    {
      image: "/Hotel Management.png",
      title: "Hotel Management",
      desc: "Powerful hotel software for bookings, billing and customer management.",
      features: [
        "Room Booking",
        "Billing",
        "Customer Records",
        "Reports & Analytics",
      ],
      link: "/contact",
      icon: Hotel,
      accent: "from-teal-300/20 to-blue-500/10",
    },
  ];

  const heroStats = [
    ["100+", "Projects"],
    ["50+", "Clients"],
    ["6+", "Years"],
    ["24/7", "Support"],
  ];

  const trustItems = [
    {
      title: "Enterprise Solutions",
      desc: "Scalable software for daily business operations.",
      icon: Building2,
    },
    {
      title: "Secure Development",
      desc: "Clean code, protected data and reliable deployment.",
      icon: ShieldCheck,
    },
    {
      title: "AI Powered Systems",
      desc: "Automation that saves time and reduces manual work.",
      icon: Sparkles,
    },
    {
      title: "Dedicated Support",
      desc: "Guidance before launch and support after delivery.",
      icon: Headphones,
    },
  ];

  const industries = [
    ["Education", GraduationCap],
    ["Healthcare", Stethoscope],
    ["Hotels", Hotel],
    ["Retail", ShoppingCart],
    ["Business", Building2],
    ["Cloud", Cloud],
  ];

  const processSteps = [
    {
      no: "01",
      title: "Requirement",
      desc: "Understanding project goals and business needs.",
    },
    {
      no: "02",
      title: "Planning",
      desc: "Creating architecture and development roadmap.",
    },
    {
      no: "03",
      title: "UI/UX Design",
      desc: "Building premium user experiences.",
    },
    {
      no: "04",
      title: "Development",
      desc: "Writing scalable and secure code.",
    },
    {
      no: "05",
      title: "Testing",
      desc: "Quality assurance and optimization.",
    },
    {
      no: "06",
      title: "Deployment",
      desc: "Launch, monitoring and support.",
    },
  ];

  const technologies = [
    "Next.js",
    "React.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Tailwind CSS",
    "REST APIs",
    "Cloud Hosting",
    "AI Solutions",
    "DevOps",
  ];

  const benefits = [
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Professional developers and designers with industry experience.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      desc: "Agile development process and timely project completion.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Affordable Pricing",
      desc: "Premium quality solutions at competitive pricing.",
    },
    {
      icon: Headphones,
      title: "Lifetime Support",
      desc: "Long-term maintenance and technical assistance.",
    },
  ];

  const faqs = [
    {
      q: "How long does a project take?",
      a: "Most projects are completed within 2 to 8 weeks depending on complexity.",
    },
    {
      q: "Do you provide support after delivery?",
      a: "Yes, we provide maintenance, updates and support services.",
    },
    {
      q: "Can you develop custom ERP software?",
      a: "Yes, ERP, CRM and management systems are our core expertise.",
    },
    {
      q: "Do you build Android and iOS apps?",
      a: "Yes, we develop mobile applications for both platforms.",
    },
  ];

  return (
    <main className="bg-[#020b35] text-white overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#020b35_0%,#07195f_48%,#0b2742_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Premium Digital Solutions
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Transform
              <span className="block text-cyan-300">Your Business</span>
              With Modern
              <span className="block">Technology</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg md:text-xl">
              We create enterprise software, AI automation, mobile applications,
              ERP systems and premium websites that help businesses automate,
              scale and serve customers better.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 text-base font-bold text-[#020b35] shadow-[0_18px_45px_rgba(34,211,238,0.28)] transition hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:px-8"
              >
                Start Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-200/40 bg-white/10 px-6 py-4 text-base font-bold text-cyan-100 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:px-8"
              >
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((item) => (
                <div
                  key={item[1]}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <h3 className="text-2xl font-black text-cyan-300 sm:text-3xl">
                    {item[0]}
                  </h3>
                  <p className="mt-1 text-sm text-blue-100">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[660px] lg:ml-auto">
            <div className="rounded-[2rem] border border-cyan-200/20 bg-white/10 p-3 shadow-[0_26px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#05133f]">
                <Image
                  src="/dashboard.png"
                  alt="TAMA TECHSOLUTIONS digital dashboard preview"
                  width={1536}
                  height={1024}
                  priority
                  className="aspect-[16/11] h-auto w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:absolute lg:-bottom-7 lg:left-5 lg:right-5 lg:mt-0">
              <div className="rounded-2xl border border-cyan-200/25 bg-[#061848]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-[#020b35]">
                    <DatabaseZap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">ERP + CRM</h3>
                    <p className="text-sm text-blue-100">Sales, billing, reports</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200/25 bg-[#061848]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300 text-[#020b35]">
                    <Workflow className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">AI Automation</h3>
                    <p className="text-sm text-blue-100">Less manual work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#061848]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-cyan-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-blue-100">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative bg-[#f7fbff] py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              Our Services
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Powerful Solutions
              <span className="block text-cyan-700">Built For Growth</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Premium software development services designed to help businesses
              automate, optimize and accelerate growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_28px_70px_rgba(8,145,178,0.16)] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <div className={
                    "bg-gradient-to-br " + service.accent + " p-6"
                  }>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-900 transition group-hover:bg-cyan-600 group-hover:text-white">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="mt-5 flex h-40 items-center justify-center rounded-2xl bg-white/70 p-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={240}
                        height={170}
                        className="max-h-32 w-auto object-contain transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-black text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>

                    <div className="mt-6 grid gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <span className="font-bold text-cyan-700">Learn More</span>
                      <ArrowRight className="h-5 w-5 text-cyan-700 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#061848] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100">
              Industries We Serve
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Solutions For Every
              <span className="block text-cyan-300">Industry</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Customized software solutions for schools, hospitals, hotels,
              startups and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {industries.map(([title, Icon]) => (
              <Link
                href="/contact"
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#020b35]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-blue-100">View Solutions</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              Company Achievements
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Numbers That
              <span className="block text-cyan-700">Matter</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["100+", "Projects Completed", Layers3],
              ["50+", "Happy Clients", Users],
              ["6+", "Years Experience", Clock3],
              ["24/7", "Support", Headphones],
            ].map(([value, label, Icon]) => (
              <div
                key={String(label)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-4xl font-black text-slate-950">
                  {String(value)}
                </h3>
                <p className="mt-3 text-slate-600">{String(label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061848] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100">
              Our Process
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Development
              <span className="block text-cyan-300">Workflow</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step) => (
              <div
                key={step.no}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-cyan-300/60"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-[#020b35]">
                  {step.no}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              Technologies
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Modern Tech
              <span className="block text-cyan-700">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300"
              >
                <h3 className="font-bold text-slate-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061848] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Why Businesses Trust
              <span className="block text-cyan-300">TAMA TECHSOLUTIONS</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-cyan-300/60"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-blue-100">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Frequently Asked
              <span className="block text-cyan-700">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <ArrowRight className="h-5 w-5 shrink-0 text-cyan-700 transition group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#020b35_0%,#07195f_55%,#083344_100%)] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-200/20 bg-white/10 p-8 shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-12">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100">
              Start Your Project Today
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">
              Ready To Build
              <span className="block text-cyan-300">Something Amazing?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Transform your ideas into powerful digital solutions with TAMA
              TECHSOLUTIONS.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-[#020b35] transition hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="https://wa.me/918603388869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-7 py-4 font-bold text-[#022c22] transition hover:-translate-y-1 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Chat On WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
