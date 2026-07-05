import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020b35] text-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* CTA SECTION */}
        <div className="py-16 border-b border-blue-900/50">

          <div className="bg-gradient-to-r from-blue-900/80 to-cyan-900/40 border border-cyan-500/20 rounded-3xl p-10 md:p-14 text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Ready To Grow Your Business With Technology?
            </h2>

            <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
              We build powerful Websites, Mobile Apps, ERP Software,
              School Management Systems, Hospital Software,
              Hotel Software and AI Automation Solutions.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </a>

          </div>

        </div>

        {/* FOOTER GRID */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* COMPANY */}
          <div>

            <Image
              src="/logo.png"
              alt="TAMA TECHSOLUTIONS"
              width={120}
              height={120}
              className="mb-5"
            />

            <h3 className="text-2xl font-bold mb-4">
              TAMA TECHSOLUTIONS
            </h3>

            <p className="text-slate-300 leading-8">
              Transforming Ideas Into Digital Success.
              We create Software, Websites, Mobile Apps,
              ERP Systems and AI Powered Solutions
              for every industry.
            </p>

            <div className="mt-6 space-y-2 text-sm text-cyan-300">

              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                Trusted Business Technology Partner
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                End-To-End Development
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                AI Powered Solutions
              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-xl font-bold mb-6 text-cyan-400">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-300">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <a href="#industries">
                  Industries
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h4 className="text-xl font-bold mb-6 text-cyan-400">
              Our Services
            </h4>

            <ul className="space-y-4 text-slate-300">

              <li>Website Development</li>

              <li>Mobile App Development</li>

              <li>ERP Software</li>

              <li>School Management Software</li>

              <li>Hospital Management Software</li>

              <li>AI Automation</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-xl font-bold mb-6 text-cyan-400">
              Contact Us
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-slate-300">
                  West Lohanipur,
                  Patna, Bihar - 800001
                </span>

              </div>

              <a
                href="https://wa.me/918603521086"
                target="_blank"
                className="flex items-start gap-3"
              >
                <Phone
                  size={20}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-slate-300">
                  +91 8603521086
                </span>

              </a>

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-slate-300">
                  info@tamatechsolutions.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Globe
                  size={20}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-slate-300">
                  www.tamatechsolutions.com
                </span>

              </div>

            </div>

          </div>

          {/* BUSINESS INFO */}
          <div>

            <h4 className="text-xl font-bold mb-6 text-cyan-400">
              Why TAMA?
            </h4>

            <div className="space-y-4 text-slate-300">

              <p>
                ✔ Custom Software Development
              </p>

              <p>
                ✔ Business Website Solutions
              </p>

              <p>
                ✔ Android & iOS Apps
              </p>

              <p>
                ✔ AI Chatbot Integration
              </p>

              <p>
                ✔ ERP & Automation
              </p>

              <p>
                ✔ 24/7 Support
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-blue-900/50 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-center">
            © 2026 TAMA TECHSOLUTIONS. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-400">

            <span className="hover:text-white transition">
              Privacy Policy
            </span>

            <span className="hover:text-white transition">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}