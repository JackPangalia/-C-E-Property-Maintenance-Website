"use client";

import { useState } from "react";
import sendEmailClient from "../utils/sendEmailClient";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitContactInfo = async () => {
    try {
      await sendEmailClient(
        email,
        "New Website Contact Submission",
        `Email: ${email}, Phone: ${phone}, Message: ${message}`,
        `<h1>New Website Contact Submission</h1><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
      );
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4 text-black flex md:flex-row flex-col lg:gap-40 gap-20">
        <div className="md:w-1/2 w-full">
          <h2 className="md:text-4xl text-3xl mb-10">Contact Now</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-b-[1px] border-black outline-none "
                placeholder="Full Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b-[1px] border-black outline-none "
                placeholder="Double check your email is correct"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm">Phone</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-b-[1px] border-black outline-none "
                placeholder="xxx-yyy-zzzz"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm">
                Tell us about your project, a bit of context will allow us to
                connect you to the right team faster.
              </label>
              <textarea
                className="bg-transparent border-[1px] h-16 resize-none border-black"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button onClick = {submitContactInfo} className="bg-transparent border-[1px] outline-none md:py-1 w-fit md:px-8 py-1 px-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-black">
              Send Message
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="md:text-4xl text-3xl mb-10">Contact Details</h2>
          <p className="text-xl mb-4">C&E Property Management</p>
          <p className="text-lg mb-4 text-gray-600">
            Professional property maintenance services you can trust. Get a
            quote today.
          </p>
          <p>Email: cepropertymaintenace@gmail.com</p>
          <p>Phone: 604-442-8874 or 604-760-4892</p>
        </div>
      </div>
    </section>
  );
}
