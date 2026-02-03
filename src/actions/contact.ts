"use server";

import emailjs from "@emailjs/nodejs";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export async function sendMessage(data: ContactData) {
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;
  const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY!;

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        date: data.date,
      },
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,  // Note: @emailjs/nodejs usually requires private key for server-side
      }
    );

    if (response.status === 200) {
      return { success: true, message: "Transmission successful. Connection established." };
    } else {
      throw new Error(`Failed to send message: ${response.text}`);
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, message: "Transmission failed. Protocol error encountered." };
  }
}
