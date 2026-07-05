import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const text = message.toLowerCase();

  let reply = "";

  if (text.includes("website")) {
    reply =
      "TAMA TECHSOLUTIONS Professional Business Websites, E-Commerce Websites aur Custom Web Applications banata hai. Responsive Design, SEO Friendly Structure aur Fast Performance ke saath.";
  } else if (text.includes("app")) {
    reply =
      "TAMA TECHSOLUTIONS Android aur iOS Mobile Applications develop karta hai. Education, Healthcare, Retail, Hotel aur Business Apps available hain.";
  } else if (text.includes("software")) {
    reply =
      "Hum School Management, Hospital Management, Hotel Management, Inventory Management aur Custom ERP Software develop karte hain.";
  } else if (text.includes("price")) {
    reply =
      "Project cost requirements ke according decide hoti hai. Free Consultation ke liye WhatsApp: +91 8603388869";
  } else {
    reply =
      "Welcome to TAMA TECHSOLUTIONS. Hum Website Development, Mobile App Development, ERP Software, AI Automation aur Custom Business Solutions provide karte hain. Contact: +91 8603388869";
  }

  return NextResponse.json({
    reply,
  });
}