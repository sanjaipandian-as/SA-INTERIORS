import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = ""; // replace with your number
  const message = "Hello, I want to know more!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white text-xl shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp />

        {/* Tooltip */}
        <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={callLink}
        className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl shadow-lg hover:scale-110 transition"
      >
        <FaPhone />

        {/* Tooltip */}
        <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Call Us
        </span>
      </a>

    </div>
  );
};

export default FloatingButtons;