import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    { name: "S. Gautam Kushwaha", role: "Founder & CEO", image: "/team/founder.jpeg" },
    { name: "Aabind Kumar", role: "Management Head", image: "/team/management.jpg" },
    { name: "Rahul Kumar", role: "Lead Developer", image: "/team/developer.jpg" },
    { name: "Vikash Kumar", role: "App Developer", image: "/team/appdeveloper.jpg" },
    { name: "Bittu Maurya", role: "Web Developer", image: "/team/webdeveloper.jpg" },
    { name: "Alok Kumar", role: "Project Coordinator", image: "/team/projectcoordinator.jpg" },
  ];

  const achievements = [
    { number: "100+", title: "Projects Delivered", icon: <RocketIcon /> },
    { number: "50+", title: "Happy Clients", icon: <UsersIcon /> },
    { number: "6+", title: "Years Experience", icon: <AwardIcon /> },
    { number: "24/7", title: "Support", icon: <HeadsetIcon /> },
  ];

  const features = [
    "Fast Delivery",
    "Secure Systems",
    "AI Automation",
    "Business Growth",
  ];

  const services = [
    "Software Development",
    "Website Development",
    "Mobile Applications",
    "AI Automation",
    "ERP Systems",
    "Cloud Solutions",
  ];

  return (
    <main className="overflow-hidden bg-[#020b35] text-white">
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[160px]" />
          <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px] px-5">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
                <SparkIcon small /> ABOUT TAMA TECHSOLUTIONS
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                Building
                <span className="block text-cyan-400">Digital Excellence</span>
                For Modern
                <span className="block">Businesses</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
                We develop premium software, ERP systems, AI automation, mobile
                applications and enterprise websites that help businesses automate
                operations, increase productivity and scale faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-cyan-400 px-7 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-cyan-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <DashboardCard />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black shadow-lg shadow-cyan-500/20">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-black text-cyan-400">
                  {item.number}
                </h3>
                <p className="mt-2 text-blue-100">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07195f] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
                WHO WE ARE
              </span>

              <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">
                Transforming Ideas Into
                <span className="block text-cyan-400">Powerful Technology</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-blue-100 md:text-lg">
                TAMA TECHSOLUTIONS is a modern technology company focused on
                building high-performance software solutions, enterprise
                applications, ERP platforms, AI automation systems and premium
                websites for businesses worldwide.
              </p>

              <p className="mt-4 text-base leading-8 text-blue-100 md:text-lg">
                We help startups, small businesses and enterprises automate
                operations, improve productivity and achieve sustainable growth
                through innovative technology.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold transition hover:border-cyan-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <CompanyCard />
          </div>
        </div>
      </section>

      <section className="bg-[#07195f] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="text-center">
            <Image
              src="/team/founder.jpeg"
              alt="Founder"
              width={320}
              height={320}
              className="mx-auto h-[260px] w-[260px] rounded-full border-4 border-cyan-400 object-cover md:h-[320px] md:w-[320px]"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
              FOUNDER'S MESSAGE
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Message From Our Founder
            </h2>

            <p className="mt-6 text-base leading-8 text-blue-100 md:text-lg">
              At TAMA TECHSOLUTIONS, our vision is to help businesses embrace
              digital transformation through innovative software, AI automation,
              mobile applications and enterprise-grade technology solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-blue-100 md:text-lg">
              We believe technology should not only solve problems but also
              create opportunities for sustainable growth and long-term success.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-cyan-400">
              S. Gautam Kushwaha
            </h3>
            <p className="text-blue-200">Founder & CEO</p>
          </div>
        </div>
      </section>

      <SimpleCardsSection
        label="WHY TAMA TECHSOLUTIONS"
        title="Why Businesses Choose Us"
        subtitle="We combine innovation, technology and business strategy to create solutions that deliver measurable results."
        items={[
          ["Fast Delivery", "Rapid development process with quality assurance."],
          ["AI Powered", "Modern AI automation and intelligent workflows."],
          ["Secure Systems", "Enterprise-grade security and protection."],
          ["Business Growth", "Technology designed to accelerate growth."],
        ]}
      />

      <section className="bg-[#07195f] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <SectionHeading label="TECHNOLOGY STACK" title="Technologies We Use" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "MongoDB",
              "MySQL",
              "Tailwind",
              "AWS",
              "Docker",
              "AI Tools",
              "Firebase",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-cyan-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading label="OUR JOURNEY" title="Growing Through Innovation" />
          <div className="mt-10 space-y-5">
            {[
              ["2019", "Company Founded"],
              ["2021", "Expanded Development Team"],
              ["2023", "AI Automation Services Launched"],
              ["2025", "100+ Projects Successfully Delivered"],
            ].map(([year, title]) => (
              <div
                key={year}
                className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xl font-black text-black">
                  {year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-blue-100">
                    Important milestone in our growth journey.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SimpleCardsSection
        label="OUR VALUES"
        title="Mission & Vision"
        items={[
          [
            "Our Mission",
            "To empower businesses with innovative, affordable and reliable technology solutions that improve efficiency, automate operations and accelerate digital transformation.",
          ],
          [
            "Our Vision",
            "To become one of India's most trusted technology companies by delivering world-class software, mobile apps, websites and AI-powered business solutions.",
          ],
        ]}
      />

      <SimpleCardsSection
        label="CERTIFICATIONS"
        title="Quality & Trust"
        items={[
          ["ISO Inspired Process", "Quality-focused workflow for every project."],
          ["Secure Development", "Security-first development approach."],
          ["Quality Assurance Standards", "Testing and review before delivery."],
        ]}
      />

      <SimpleCardsSection
        label="TRUSTED BY CLIENTS"
        title="Businesses We Serve"
        items={[
          ["Healthcare", ""],
          ["Education", ""],
          ["Retail", ""],
          ["Manufacturing", ""],
          ["Finance", ""],
          ["Real Estate", ""],
          ["Startups", ""],
          ["Enterprises", ""],
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            label="OUR LOCATION"
            title="Visit Our Office"
            subtitle="Meet our experts and discuss your project requirements."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/20">
            <iframe
              src="https://www.google.com/maps?q=25.6048401,85.1519274&z=15&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-5">
            {[
              ["Do you build custom software?", "Yes, we build fully customized software solutions."],
              ["Do you provide mobile app development?", "Yes, Android and cross-platform applications."],
              ["Can you build ERP systems?", "Yes, complete ERP and business management systems."],
              ["Do you offer maintenance support?", "Yes, ongoing support and maintenance services."],
            ].map(([q, a]) => (
              <details
                key={q}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer text-xl font-bold text-cyan-400">
                  {q}
                </summary>
                <p className="mt-4 text-blue-100">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            label="OUR PROFESSIONAL TEAM"
            title="Meet The Experts"
            subtitle="Passionate professionals building software, AI systems, websites and enterprise solutions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="relative mx-auto h-[190px] w-[190px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full border-4 border-cyan-400/30 object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{member.name}</h3>
                <p className="mt-2 font-semibold text-cyan-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07195f] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-white/5 p-7 text-center shadow-[0_0_80px_rgba(6,182,212,0.18)] md:p-12">
            <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
                START YOUR PROJECT
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Ready To Build
                <span className="block text-cyan-400">Something Amazing?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
                Let's transform your business with powerful software, websites,
                mobile applications and AI-powered solutions.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                <a
                  href="tel:8603521086"
                  className="group rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-left backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black transition group-hover:scale-110">
                    <PhoneIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">Call Us</h3>
                  <p className="mt-2 text-cyan-300">8603521086</p>
                  <p className="mt-3 text-sm text-blue-100">
                    Talk directly with our team.
                  </p>
                </a>

                <a
                  href="https://wa.me/918603388869"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-left backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400 hover:bg-green-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-black transition group-hover:scale-110">
                    <WhatsAppIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">WhatsApp</h3>
                  <p className="mt-2 text-green-300">8603388869</p>
                  <p className="mt-3 text-sm text-blue-100">
                    Get quick project support.
                  </p>
                </a>

                <a
                  href="mailto:tamatechsolution00@gmail.com"
                  className="group rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-left backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black transition group-hover:scale-110">
                    <MailIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">Email</h3>
                  <p className="mt-2 break-all text-cyan-300">
                    tamatechsolution00@gmail.com
                  </p>
                  <p className="mt-3 text-sm text-blue-100">
                    Send your requirements anytime.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
        {label}
      </span>
      <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-slate-950/85 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h3 className="text-lg font-bold">TAMA Dashboard</h3>
            <p className="text-sm text-cyan-300">Business Analytics</p>
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-4">
            <MiniStat title="Revenue" value="Rs 12.8L" note="+18.2%" />
            <MiniStat title="Active Clients" value="148" note="23 New This Month" />
          </div>

          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-bold">Revenue Analytics</h3>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                LIVE
              </span>
            </div>
            <BarGraph />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <MiniStat title="Running" value="38" />
            <MiniStat title="Completed" value="214" />
            <MiniStat title="Online" value="26" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyCard() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-[90px]" />
      <div className="relative rounded-[32px] border border-cyan-400/20 bg-slate-950/90 p-5 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Company Analytics</h3>
            <p className="text-sm text-cyan-300">Live Business Performance</p>
          </div>
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
            Online
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <MiniStat title="Projects" value="128" />
          <MiniStat title="Clients" value="92" />
          <MiniStat title="Revenue" value="Rs 18L" />
          <MiniStat title="Growth" value="+34%" />
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold">Monthly Performance</h3>
            <span className="text-cyan-300">2026</span>
          </div>
          <BarGraph />
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-cyan-300">{title}</p>
      <h4 className="mt-2 text-2xl font-black">{value}</h4>
      {note && <p className="mt-2 text-sm text-green-300">{note}</p>}
      <div className="mt-4 h-2 rounded-full bg-white/10">
        <div className="h-2 w-[78%] rounded-full bg-cyan-400" />
      </div>
    </div>
  );
}

function BarGraph() {
  const values = [42, 58, 50, 72, 68, 90, 80, 110, 98, 125, 138, 160];

  return (
    <div className="flex h-40 items-end justify-between gap-2">
      {values.map((height, index) => (
        <div key={index} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full max-w-[18px] rounded-t-full bg-gradient-to-t from-cyan-500 to-cyan-300"
            style={{ height }}
          />
          <span className="text-[10px] text-slate-400">
            {"JFMAMJJASOND"[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

function SimpleCardsSection({
  label,
  title,
  subtitle,
  items,
}: {
  label: string;
  title: string;
  subtitle?: string;
  items: string[][];
}) {
  function getType(cardTitle: string) {
    const name = cardTitle.toLowerCase();

    if (name.includes("mission")) return "mission";
    if (name.includes("vision")) return "vision";
    if (name.includes("quality") || name.includes("secure")) return "quality";
    if (name.includes("business") || name.includes("health") || name.includes("education")) return "business";
    if (name.includes("fast")) return "fast";
    if (name.includes("ai")) return "ai";
    if (name.includes("growth")) return "growth";
    if (name.includes("iso")) return "award";

    return "spark";
  }

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading label={label} title={title} subtitle={subtitle} />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map(([cardTitle, text]) => (
            <div
              key={cardTitle}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <IconBox type={getType(cardTitle)} />

                <h3 className="text-2xl font-black text-white">
                  {cardTitle}
                </h3>

                {text && <p className="mt-4 leading-8 text-blue-100">{text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconBox({ type }: { type: string }) {
  return (
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black shadow-lg shadow-cyan-500/20">
      {type === "mission" && <TargetIcon />}
      {type === "vision" && <RocketIcon />}
      {type === "quality" && <ShieldIcon />}
      {type === "business" && <BuildingIcon />}
      {type === "fast" && <BoltIcon />}
      {type === "ai" && <AiIcon />}
      {type === "growth" && <ChartIcon />}
      {type === "award" && <AwardIcon />}
      {type === "spark" && <SparkIcon />}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5a9.4 9.4 0 0 0-8 14.3L3 21l4.3-1A9.4 9.4 0 1 0 12 2.5Zm5.4 13.3c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.2-3.5-.8-2.9-1.2-4.8-4.2-4.9-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1.1-2.4c.2-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5.3.6.9 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.5.6-.2.2-.4.4-.2.8.2.4.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.6.3.1.6.1.8-.1.2-.3.9-1 1.1-1.3.2-.3.5-.3.8-.2.3.1 2 .9 2.3 1.1.3.2.5.3.6.4 0 .1 0 .5-.2 1.1Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm8 8 8-5.2V7l-8 5.2L4 7v.8L12 13Z" fill="currentColor" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 22a10 10 0 1 1 10-10h-3a7 7 0 1 0-7 7v3Zm0-5a5 5 0 1 1 5-5h-3a2 2 0 1 0-2 2v3Zm1-6 7-7v4h4l-7 7h-4v-4Z" fill="currentColor" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 3c3.6.2 6.8 3.4 8 8l-5 5-4-4-4-4 5-5ZM7 9l5 5-2 2H6V12l1-3Zm8 8-3-3 2-2 3 3-2 2ZM5 15c1.8.2 3.8 2.2 4 4-2.2.8-4.3 1.3-6 1 0-1.7.5-3.8 2-5Z" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 20 5v6c0 5-3.3 9.4-8 11-4.7-1.6-8-6-8-11V5l8-3Zm0 4.2-5 1.9V11c0 3.3 2 6.4 5 7.8 3-1.4 5-4.5 5-7.8V8.1l-5-1.9Z" fill="currentColor" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 21V3h11v18H4Zm3-14h2v2H7V7Zm0 4h2v2H7v-2Zm0 4h2v2H7v-2Zm4-8h2v2h-2V7Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Zm6-5h3v11h-3V10Zm1.5 3v2h1v-2h-1Zm0 4v2h1v-2h-1Z" fill="currentColor" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 2 4 14h7l-1 8 10-13h-7V2Z" fill="currentColor" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 3h8v3h3v8c0 3.9-3.1 7-7 7s-7-3.1-7-7V6h3V3Zm2 4v2H8v3h2v2h4v-2h2V9h-2V7h-4Zm-2 9a5 5 0 0 0 8 0H8Z" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 19h17v2H2V3h2v16Zm3-2V9h3v8H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z" fill="currentColor" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a7 7 0 0 1 4 12.7V22l-4-2-4 2v-7.3A7 7 0 0 1 12 2Zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-6 1.8-6 4v2h12v-2c0-2.2-2.7-4-6-4Zm8-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2c-.7 0-1.4.1-2 .3 1.2.8 2 1.9 2 3.2V19h5v-1.8c0-1.8-2.2-3.2-5-3.2Z" fill="currentColor" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h2v-7H6v-1a6 6 0 0 1 12 0v1h-3v7h2.2c-.4 1-1.4 2-3.2 2h-2v2h2c3.8 0 6-2.4 6-6v-6a8 8 0 0 0-8-8Z" fill="currentColor" />
    </svg>
  );
}

function SparkIcon({ small = false }: { small?: boolean }) {
  return (
    <svg width={small ? "16" : "28"} height={small ? "16" : "28"} viewBox="0 0 24 24" fill="none">
      <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2Z" fill="currentColor" />
    </svg>
  );
}