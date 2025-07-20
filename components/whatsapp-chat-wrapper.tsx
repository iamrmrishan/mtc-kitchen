"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappWrapper() {
  return (
    <div className="mt-10">
    <FloatingWhatsApp
    avatar="/logo.png"
      phoneNumber={"+94768506008"}
      accountName={"SKYRIM TRAVELS"}
    />
    </div>
  );
}
