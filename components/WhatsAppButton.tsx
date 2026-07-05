"use client";

export default function WhatsAppButton() {
  const whatsappMessage =
    "Hello TAMA TECHSOLUTIONS, I want information about Website, Mobile App, Software or AI Solutions.";

  return (
    <>
      {/* Help Bubble */}

      <div className="fixed bottom-24 right-6 z-50 hidden md:block">
        <div className="bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl border">
          👋 Need Help? Chat With Us
        </div>
      </div>

      {/* WhatsApp Button */}

      <a
        href={`https://wa.me/918603388869?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div
          className="
          relative
          bg-green-500
          hover:bg-green-600
          text-white
          w-16
          h-16
          md:w-20
          md:h-20
          rounded-full
          flex
          items-center
          justify-center
          shadow-[0_0_40px_rgba(34,197,94,0.6)]
          transition-all
          duration-300
          hover:scale-110
        "
        >
          {/* Ping Animation */}

          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="relative z-10"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 8.012 0C3.596 0 0 3.596 0 8.012c0 1.41.368 2.787 1.067 4.001L0 16l4.102-1.047a8.013 8.013 0 0 0 3.91 1.002h.001c4.415 0 8.011-3.596 8.011-8.012a7.95 7.95 0 0 0-2.423-5.617zM8.013 14.5a6.48 6.48 0 0 1-3.301-.902l-.236-.141-2.434.621.649-2.371-.154-.244A6.48 6.48 0 0 1 1.5 8.013C1.5 4.42 4.42 1.5 8.013 1.5c1.733 0 3.361.675 4.586 1.9a6.445 6.445 0 0 1 1.9 4.586c0 3.593-2.92 6.514-6.486 6.514zm3.771-4.862c-.206-.103-1.219-.601-1.408-.67-.188-.068-.326-.103-.463.103-.137.206-.532.67-.652.807-.12.137-.24.154-.446.051-.206-.103-.869-.32-1.655-1.02-.611-.545-1.024-1.218-1.144-1.424-.12-.206-.013-.317.09-.42.093-.092.206-.24.309-.36.103-.12.137-.206.206-.343.068-.137.034-.257-.017-.36-.052-.103-.463-1.116-.635-1.527-.168-.404-.339-.349-.463-.355h-.394c-.137 0-.36.052-.549.257-.188.206-.72.704-.72 1.716 0 1.013.737 1.992.84 2.129.103.137 1.45 2.214 3.514 3.103.491.212.874.338 1.172.432.492.157.94.135 1.294.082.395-.059 1.219-.498 1.391-.979.171-.48.171-.893.12-.979-.051-.086-.188-.137-.394-.24z" />
          </svg>
        </div>
      </a>
    </>
  );
}