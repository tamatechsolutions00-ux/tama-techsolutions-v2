"use client";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const business = (form.elements.namedItem("business") as HTMLInputElement).value;
    const project = (form.elements.namedItem("project") as HTMLTextAreaElement).value;

    const message =
      `Hello TAMA TECHSOLUTIONS,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A` +
      `Business: ${business}%0A%0A` +
      `Project Details:%0A${project}`;

    window.open(
      `https://wa.me/918603388869?text=${message}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <main className="bg-[#020b35] text-white min-h-screen">

      {/* Hero Section */}

      <section className="py-24 bg-gradient-to-b from-[#03114d] via-[#07195f] to-[#020b35]">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="px-6 py-2 rounded-full border border-cyan-500 text-cyan-400 font-semibold">
            CONTACT TAMA TECHSOLUTIONS
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6">
            Let's Build Something Amazing
          </h1>

          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Software Development, Websites, Mobile Apps, ERP Systems,
            Business Automation and AI Solutions for Modern Businesses.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-cyan-500/20">

              <h2 className="text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="text-cyan-400 text-xl font-bold mb-2">
                    📍 Office Address
                  </h3>

                  <p className="text-blue-100 leading-8">
                    Misthi Niwash,
                    Near Santosh Kirana Store,
                    J532 WPM, West Lohianipur,
                    Patna, Bihar - 800001
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 text-xl font-bold mb-2">
                    📞 Phone Numbers
                  </h3>

                  <p className="text-blue-100 leading-8">
                    +91 8603521086
                    <br />
                    +91 8210468031
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 text-xl font-bold mb-2">
                    📧 Email
                  </h3>

                  <p className="text-blue-100">
                    info@tamatechsolutions.com
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 text-xl font-bold mb-2">
                    🌐 Website
                  </h3>

                  <p className="text-blue-100">
                    www.tamatechsolutions.com
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 text-xl font-bold mb-2">
                    ⏰ Business Hours
                  </h3>

                  <p className="text-blue-100">
                    Monday - Saturday
                    <br />
                    10:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side Form */}

            <div className="bg-white rounded-3xl p-10 shadow-2xl">

              <h2 className="text-4xl font-bold text-black mb-8">
                Request Free Consultation
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border text-black"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border text-black"
                />

                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border text-black"
                />

                <input
                  name="business"
                  type="text"
                  placeholder="Business / Organization"
                  className="w-full p-4 rounded-xl border text-black"
                />

                <textarea
                  name="project"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-xl border text-black"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-bold transition-all duration-300"
                >
                  Send Inquiry On WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section className="py-24 bg-[#07195f]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Need Instant Support?
          </h2>

          <p className="text-blue-100 text-lg mb-10">
            Chat directly with our team and get a free consultation today.
          </p>

          <a
            href="https://wa.me/918603388869"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-bold inline-block transition-all duration-300"
          >
            Chat On WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}