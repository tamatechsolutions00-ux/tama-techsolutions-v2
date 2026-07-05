import {
  Rocket,
  Handshake,
  Building2,
  MessagesSquare,
  Zap,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "100+",
      label: "Projects Delivered",
      icon: <Rocket className="h-7 w-7" />,
    },
    {
      value: "50+",
      label: "Satisfied Clients",
      icon: <Handshake className="h-7 w-7" />,
    },
    {
      value: "10+",
      label: "Industries Served",
      icon: <Building2 className="h-7 w-7" />,
    },
    {
      value: "24/7",
      label: "Technical Support",
      icon: <MessagesSquare className="h-7 w-7" />,
    },
    {
      value: "100%",
      label: "Custom Solutions",
      icon: <Zap className="h-7 w-7" />,
    },
  ];

  return (
    <section className="relative z-20 bg-[#020b35] px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/5 shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden border-b border-r border-white/10 p-6 text-center transition hover:bg-cyan-500/10 lg:border-b-0"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 transition group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-100">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}