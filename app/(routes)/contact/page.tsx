import React from "react";
import Image from "next/image";
import { Truck, Banknote, Phone, Lock } from "lucide-react";

export const metadata = {
  title: "Contact Us | ResellerBus",
  description:
    "Get in touch with ResellerBus. We love to hear from our customers — send us feedback, questions, or just say hi.",
};

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Orders above $200",
  },
  {
    icon: Banknote,
    title: "Money-back",
    description: "30 day Guarantee",
  },
  {
    icon: Phone,
    title: "Premium Support",
    description: "Phone and email support",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
];

const ContactPage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F4F4F5]">
      {/* ─── Hero Banner ─── */}
      <section className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Contact hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Wear like a pro
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-lg">
            You have about our products or our shop, or even just a message to
            say hi!
          </p>
        </div>
      </section>

      {/* ─── Contact Form Section ─── */}
      <section className="bg-[#F4F4F5] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              We love to hear from our customers, so please feel free to contact
              us with any feedback or questions
            </p>
          </div>

          {/* Form + Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left — Form */}
            <form className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Write here..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all"
              >
                Submit
              </button>
            </form>

            {/* Right — Image */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden hidden lg:block">
              <Image
                src="/user.png"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Bar ─── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center py-8 px-4"
                >
                  <Icon
                    className="w-7 h-7 mb-4 text-gray-800"
                    strokeWidth={1.5}
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;