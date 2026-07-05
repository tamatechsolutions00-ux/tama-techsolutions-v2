"use client";

import { useState } from "react";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Website banwane ka cost kya hai?",
    "School Management Software ke features batao",
    "Mobile App Development kitne din me hoga?",
    "AI Automation kya hota hai?",
  ];

  const askAI = async (customMessage?: string) => {
    const finalMessage = customMessage || message;

    if (!finalMessage.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: finalMessage,
        }),
      });

      const data = await res.json();

      setReply(data.reply);
    } catch (error) {
      setReply(
        "AI Assistant is currently unavailable. Please contact us on WhatsApp."
      );
    }

    setLoading(false);
  };

  return (
    <section id="ai" className="py-20 bg-[#020b35]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            AI POWERED BUSINESS ASSISTANT
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
            🤖 TAMA AI Assistant
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-5">
            Ask anything about Website Development, Mobile Apps,
            ERP Software, AI Automation, Pricing, Project Cost,
            Features and Business Solutions.
          </p>

        </div>

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">

          {/* Suggestions */}

          <div className="flex flex-wrap gap-3 mb-6">

            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setMessage(item);
                  askAI(item);
                }}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
              >
                {item}
              </button>
            ))}

          </div>

          {/* Input */}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask in Hindi or English..."
            className="
              w-full
              h-36
              bg-[#07195f]
              border
              border-cyan-500/20
              rounded-2xl
              p-5
              text-white
              outline-none
              resize-none
            "
          />

          <div className="flex flex-wrap gap-4 mt-5">

            <button
              onClick={() => askAI()}
              disabled={loading}
              className="
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-bold
                px-8
                py-3
                rounded-xl
                transition
              "
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>

            <a
              href="https://wa.me/918603521086"
              target="_blank"
              className="
                border
                border-green-500
                text-green-400
                px-8
                py-3
                rounded-xl
                hover:bg-green-500
                hover:text-white
                transition
              "
            >
              WhatsApp Expert
            </a>

          </div>

          {/* Response */}

          {reply && (
            <div className="mt-8 bg-[#07195f] rounded-2xl p-6 border border-cyan-500/20">

              <h3 className="text-cyan-400 font-bold text-xl mb-4">
                AI Response
              </h3>

              <p className="text-blue-100 whitespace-pre-wrap leading-8">
                {reply}
              </p>

            </div>
          )}

          {/* Features */}

          <div className="grid md:grid-cols-4 gap-4 mt-10">

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-bold text-cyan-400 mb-2">
                Website Development
              </h4>

              <p className="text-slate-300 text-sm">
                Business, Portfolio, Company & E-Commerce Websites
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-bold text-cyan-400 mb-2">
                Mobile Apps
              </h4>

              <p className="text-slate-300 text-sm">
                Android & iOS Application Development
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-bold text-cyan-400 mb-2">
                ERP Software
              </h4>

              <p className="text-slate-300 text-sm">
                School, Hospital, Hotel & Retail ERP Solutions
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-bold text-cyan-400 mb-2">
                AI Automation
              </h4>

              <p className="text-slate-300 text-sm">
                Smart AI Chatbots & Business Automation
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}