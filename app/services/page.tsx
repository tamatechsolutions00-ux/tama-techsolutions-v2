import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
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

type Service = {
  image: string;
  title: string;
  desc: string;
  features: string[];
  link: string;
  icon: LucideIcon;
  tone: string;
};

type IconItem = {
  title: string;
  desc?: string;
  icon: LucideIcon;
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      image: "/Software Development.png",
      title: "Software Development",
      desc: "Custom ERP, CRM, management systems and enterprise business automation solutions.",
      features: ["ERP Development", "CRM Systems", "Inventory Management", "Business Automation"],
      link: "/contact",
      icon: Code2,
      tone: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    {
      image: "/Website Development.png",
      title: "Website Development",
      desc: "Modern responsive websites optimized for speed, SEO and conversions.",
      features: ["Corporate Websites", "Business Portals", "Landing Pages", "SEO Optimization"],
      link: "/contact",
      icon: MonitorSmartphone,
      tone: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      image: "/Mobile App Development.png",
      title: "Mobile App Development",
      desc: "Premium Android and iOS applications with powerful user experiences.",
      features: ["Android Apps", "iOS Apps", "Admin Panel", "Push Notifications"],
      link: "/contact",
      icon: Smartphone,
      tone: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      image: "/AI-Solutions.png",
      title: "AI Solutions",
      desc: "Intelligent AI systems that automate workflows and increase productivity.",
      features: ["AI Chatbots", "Business Automation", "AI Assistants", "Smart Analytics"],
      link: "/contact",
      icon: Bot,
      tone: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      image: "/School ERP.png",
      title: "School ERP",
      desc: "Complete digital ecosystem for schools, colleges and coaching institutes.",
      features: ["Student Management", "Fee Management", "Attendance", "Parent Portal"],
      link: "/contact",
      icon: GraduationCap,
      tone: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      image: "/Hotel Management.png",
      title: "Hotel Management",
      desc: "Powerful hotel software for bookings, billing and customer management.",
      features: ["Room Booking", "Billing", "Customer Records", "Reports & Analytics"],
      link: "/contact",
      icon: Hotel,
      tone: "bg-teal-50 text-teal-700 border-teal-200",
    },
  ];

  const trustItems: IconItem[] = [
    { title: "Enterprise Solutions", desc: "Scalable software for daily operations.", icon: Building2 },
    { title: "Secure Development", desc: "Clean code, protected data and reliable launch.", icon: ShieldCheck },
    { title: "AI Powered Systems", desc: "Automation for faster business workflows.", icon: Sparkles },
    { title: "Dedicated Support", desc: "Support before launch and after delivery.", icon: Headphones },
  ];

  const industries: IconItem[] = [
    { title: "Education", icon: GraduationCap },
    { title: "Healthcare", icon: Stethoscope },
    { title: "Hotels", icon: Hotel },
    { title: "Retail", icon: ShoppingCart },
    { title: "Business", icon: Building2 },
    { title: "Cloud", icon: Cloud },
  ];

  const processSteps = [
    { no: "01", title: "Requirement", desc: "We understand business goals, users and required features." },
    { no: "02", title: "Planning", desc: "We create the roadmap, modules, timeline and launch flow." },
    { no: "03", title: "UI/UX Design", desc: "We design clear screens that look premium and feel easy." },
    { no: "04", title: "Development", desc: "We build scalable, secure and responsive web/app systems." },
    { no: "05", title: "Testing", desc: "We check speed, layout, forms, links and mobile experience." },
    { no: "06", title: "Deployment", desc: "We launch the project and support updates after delivery." },
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

  const benefits: IconItem[] = [
    { icon: Users, title: "Experienced Team", desc: "Professional developers and designers with practical industry experience." },
    { icon: Rocket, title: "Fast Delivery", desc: "Agile delivery process with clear milestones and timely completion." },
    { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Premium quality solutions at competitive pricing for growing businesses." },
    { icon: Headphones, title: "Lifetime Support", desc: "Long-term maintenance, technical assistance and improvement support." },
  ];

  const faqs = [
    { q: "How long does a project take?", a: "Most projects are completed within 2 to 8 weeks depending on features and complexity." },
    { q: "Do you provide support after delivery?", a: "Yes, we provide maintenance, updates and support services after delivery." },
    { q: "Can you develop custom ERP software?", a: "Yes, ERP, CRM and management systems are our core expertise." },
    { q: "Do you build Android and iOS apps?", a: "Yes, we develop mobile applications for both platforms." },
  ];

  return (
    <main className="overflow-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative bg-[#020b35] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fbff] to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Premium Digital Solutions
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl md:text-6xl xl:text-7xl">
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

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#020b35] shadow-[0_18px_50px_rgba(34,211,238,0.32)] transition hover:-translate-y-1 hover:bg-cyan-200">
                Start Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link href="/pricing" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["100+", "Projects"],
                ["50+", "Clients"],
                ["6+", "Years"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <h3 className="text-2xl font-black text-cyan-300 sm:text-3xl">{value}</h3>
                  <p className="mt-1 text-sm text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
            <div className="rounded-[2rem] border border-cyan-200/20 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur sm:p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061848]">
                <Image
                  src="/dashboard.png"
                  alt="TAMA TECHSOLUTIONS digital dashboard preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:absolute lg:-bottom-7 lg:left-5 lg:right-5 lg:mt-0">
              <div className="rounded-2xl border border-cyan-200/25 bg-[#061848]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-[#020b35]">
                    <DatabaseZap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">ERP + CRM</h3>
                    <p className="text-sm text-blue-100">Sales, billing, reports</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200/25 bg-[#061848]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300 text-[#020b35]">
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

      {/* Trust Bar */}
      <section className="relative z-10 -mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,0.12)] md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 rounded-2xl p-4 transition hover:bg-slate-50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              Our Services
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Powerful Solutions
              <span className="block text-cyan-700">Built For Growth</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Premium software development services designed to help businesses automate,
              optimize and accelerate growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_28px_80px_rgba(8,145,178,0.18)]"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className={"flex h-12 w-12 items-center justify-center rounded-xl border " + service.tone}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition group-hover:bg-cyan-600 group-hover:text-white">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="relative mt-5 h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-5 transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-0">
                    <h3 className="text-2xl font-black text-slate-950">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>

                    <div className="mt-6 grid gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <span className="font-black text-cyan-700">Learn More</span>
                      <ArrowRight className="h-5 w-5 text-cyan-700 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Band */}
      <section className="bg-[#061848] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-black text-cyan-100">
                Business Ready Systems
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                One team for website, app, software and AI.
              </h2>
              <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
                Your visitor should understand the value in seconds. Every service is shown
                with clear benefits, real use cases and direct contact actions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Responsive UI", desc: "Mobile, tablet and desktop ready layouts." },
                { title: "Fast Pages", desc: "Clean structure focused on speed and clarity." },
                { title: "Lead Focused", desc: "Every card and button guides users to contact." },
                { title: "Premium Feel", desc: "Modern spacing, depth, icons and dashboard visuals." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                  <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-2 leading-7 text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              Industries We Serve
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Solutions For Every
              <span className="block text-cyan-700">Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href="/contact" className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">View Solutions</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "100+", label: "Projects Completed", icon: Layers3 },
            { value: "50+", label: "Happy Clients", icon: Users },
            { value: "6+", label: "Years Experience", icon: Clock3 },
            { value: "24/7", label: "Support", icon: Headphones },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-4xl font-black text-slate-950">{item.value}</h3>
                <p className="mt-3 text-slate-600">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#061848] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-black text-cyan-100">
              Our Process
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Development
              <span className="block text-cyan-300">Workflow</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.no} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-cyan-300/60">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-[#020b35]">{step.no}</span>
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              Technologies
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Modern Tech
              <span className="block text-cyan-700">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300">
                <h3 className="font-black text-slate-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Why Businesses Trust
              <span className="block text-cyan-700">TAMA TECHSOLUTIONS</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-300">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fbff] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Frequently Asked
              <span className="block text-cyan-700">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
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

      {/* CTA */}
      <section className="bg-[#020b35] px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-200/20 bg-white/10 p-8 text-center shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-12">
          <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
            Start Your Project Today
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Ready To Build
            <span className="block text-cyan-300">Something Amazing?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Transform your ideas into powerful digital solutions with TAMA TECHSOLUTIONS.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#020b35] transition hover:-translate-y-1 hover:bg-cyan-200">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a href="https://wa.me/918603388869" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-7 py-4 font-black text-[#022c22] transition hover:-translate-y-1 hover:bg-emerald-300">
              Chat On WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}