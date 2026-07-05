"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !phone || !service || !message) {
      setStatus("Please fill all details before submitting.");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello TAMA TECHSOLUTIONS,%0A%0AI want a free consultation.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0ARequirement: ${message}`
    );

    setStatus("Opening WhatsApp with your consultation details...");
    window.open(`https://wa.me/918603521086?text=${whatsappMessage}`, "_blank");

    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#020b35] via-[#03124d] to-[#020b35] py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute -right-28 bottom-10 h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-300">
            CONTACT TAMA TECHSOLUTIONS
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Let's Build Your Next
            <span className="block text-cyan-400">Digital Solution</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
            Need a website, mobile app, ERP software, school management system,
            hospital software, hotel software or AI automation solution? Let's
            discuss your project today.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur-2xl md:p-8">
            <h3 className="text-3xl font-black md:text-4xl">
              Contact Information
            </h3>

            <div className="mt-8 space-y-5">
              <InfoCard
                icon={<MapPin className="h-6 w-6" />}
                title="Office Address"
                text="Misthi Niwash, Near Santosh Kirana, J532 WPM, West Lohanipur, Patna, Bihar - 800001"
              />

              <InfoCard
                icon={<Phone className="h-6 w-6" />}
                title="Call Us"
                text="+91 8603521086, +91 8210468031"
                href="tel:8603521086"
              />

              <InfoCard
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                text="info@tamatechsolutions.com"
                href="mailto:info@tamatechsolutions.com"
              />

              <InfoCard
                icon={<Globe className="h-6 w-6" />}
                title="Website"
                text="www.tamatechsolutions.com"
                href="https://www.tamatechsolutions.com"
              />
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/35 p-5">
              <h4 className="text-xl font-black">Why Contact Us?</h4>

              <ul className="mt-4 space-y-3 text-blue-100">
                {[
                  "Free Project Consultation",
                  "Custom Software Planning",
                  "Mobile App Strategy",
                  "Website Development Guidance",
                  "AI Automation Solutions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[30px] border border-cyan-400/20 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-2xl md:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-black md:text-4xl">
                  Request Free Consultation
                </h3>
                <p className="mt-3 text-blue-100">
                  Fill the form and your details will open directly in WhatsApp.
                </p>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-black md:flex">
                <Send className="h-7 w-7" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
                />

                <select
                  name="service"
                  defaultValue=""
                  className="w-full rounded-2xl border border-white/10 bg-[#07143d] px-5 py-4 text-white outline-none focus:border-cyan-400"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>ERP Software</option>
                  <option>School Management Software</option>
                  <option>Hospital Management Software</option>
                  <option>Hotel Management Software</option>
                  <option>AI Automation</option>
                  <option>Custom Software</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Describe your project requirements..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
              />

              {status && (
                <p className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 text-lg font-black text-black transition hover:bg-cyan-400"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="https://wa.me/918603521086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-green-400 bg-green-500/10 px-6 py-4 text-lg font-black text-green-300 transition hover:bg-green-500 hover:text-black"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/30 p-4 transition hover:border-cyan-400 hover:bg-cyan-500/10">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-black">
        {icon}
      </div>

      <div>
        <h4 className="text-xl font-black">{title}</h4>
        <p className="mt-1 leading-7 text-blue-100">{text}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}