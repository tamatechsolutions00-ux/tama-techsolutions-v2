import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Website",
      price: "₹9,999",
      popular: false,
      features: [
        "5 Pages Website",
        "Mobile Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "WhatsApp Integration",
        "Free Hosting Support",
      ],
    },
    {
      name: "Business Website",
      price: "₹19,999",
      popular: true,
      features: [
        "10+ Pages Website",
        "Admin Panel",
        "Advanced SEO",
        "Google Maps Integration",
        "WhatsApp Integration",
        "Lead Generation Setup",
      ],
    },
    {
      name: "Premium Website",
      price: "₹39,999",
      popular: false,
      features: [
        "Custom UI/UX Design",
        "Admin Dashboard",
        "Blog System",
        "Premium Animations",
        "Full SEO Setup",
        "Performance Optimization",
      ],
    },
    {
      name: "Mobile App Development",
      price: "₹49,999",
      popular: false,
      features: [
        "Android App",
        "Modern UI Design",
        "API Integration",
        "Push Notifications",
        "Play Store Support",
        "Admin Panel",
      ],
    },
    {
      name: "Custom Software / ERP",
      price: "Custom Quote",
      popular: false,
      features: [
        "School Management",
        "Hospital Management",
        "Hotel Management",
        "Inventory Management",
        "Business Automation",
        "Custom ERP Solution",
      ],
    },
  ];

  return (
    <main className="bg-[#020b35] text-white min-h-screen">

      {/* Hero */}

      <section className="py-24 bg-gradient-to-b from-[#03114d] to-[#020b35]">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-400">
            TRANSPARENT PRICING
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6">
            Pricing Plans
          </h1>

          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Affordable and scalable pricing for websites, mobile applications,
            ERP systems, business software and AI powered solutions.
          </p>

        </div>

      </section>

      {/* Pricing Cards */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-105 hover:border-cyan-400
                ${
                  plan.popular
                    ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.4)]"
                    : "bg-white/10 border-white/10"
                }`}
              >

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-cyan-400 px-5 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h2 className="text-3xl font-bold mb-4">
                  {plan.name}
                </h2>

                <div className="text-5xl font-black mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-10">

                  {plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <span className="text-green-400 font-bold">
                        ✓
                      </span>

                      {feature}
                    </li>

                  ))}

                </ul>

                <a
                  href={`https://wa.me/918603388869?text=Hello%20TAMA%20TECHSOLUTIONS,%20I%20am%20interested%20in%20${encodeURIComponent(
                    plan.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-black text-cyan-400 hover:bg-slate-900"
                      : "bg-cyan-500 hover:bg-cyan-600 text-black"
                  }`}
                >
                  Get Quote
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20 bg-[#07195f]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                100+
              </h3>

              <p className="mt-3 text-blue-100">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                50+
              </h3>

              <p className="mt-3 text-blue-100">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="mt-3 text-blue-100">
                Technical Support
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="mt-3 text-blue-100">
                Satisfaction Focused
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Need Custom Pricing?
          </h2>

          <p className="text-blue-100 text-lg mb-10">
            Every business is different. Get a personalized quotation
            according to your requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/918603388869?text=Hello%20TAMA%20TECHSOLUTIONS,%20I%20need%20a%20custom%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp Now
            </a>

            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-xl font-bold"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}