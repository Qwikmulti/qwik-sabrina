import React from "react";
import Image from "next/image";
import { Tag, Truck, Banknote, Phone, Lock } from "lucide-react";

export const metadata = {
  title: "About Us | ResellerBus",
  description:
    "Learn about our story, mission, and the passion behind ResellerBus. Discover timeless fashion designed to delight you for years to come.",
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

const galleryImages = [
  { src: "/billboard-bg.png", alt: "Gallery image 1" },
  { src: "/billboard-bg-2.png", alt: "Gallery image 2" },
  { src: "/billboard-bg-3.png", alt: "Gallery image 3" },
  { src: "/hold.jpg", alt: "Gallery image 4" },
];

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F4F4F5]">
      {/* ─── Hero Banner ─── */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="About hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
            A story about two lovers
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-xl">
            Since 1963, we&apos;ve pioneered the creation of beautiful clothing
            and footwear for all the family.
          </p>
        </div>
      </section>

      {/* ─── Brand Story ─── */}
      <section className="bg-[#F4F4F5] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="inline-block border-y border-black py-3">
              <div className="text-2xl sm:text-3xl font-light tracking-wide flex items-center gap-1">
                <span>RESELLER</span>
                <Tag className="w-5 h-5 transform rotate-45 text-black fill-black" />
                <span>BUS</span>
              </div>
            </div>
          </div>

          {/* Big Quote */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug max-w-3xl mx-auto mb-16 sm:mb-24">
            &ldquo;Our prime aim: to conceive commodities that will delight you
            and accompany you for numerous years.&rdquo;
          </h2>

          {/* Two-column: Image + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — Large Image */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/user.png"
                alt="About us — craftsmanship"
                fill
                className="object-cover"
              />
            </div>

            {/* Right — Text + Smaller Image */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Who we are?
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                At ResellerBus, we believe that eCommerce should be simple,
                elegant, and effective. Our template is designed to empower
                businesses of all sizes, providing a seamless platform to
                showcase products, tell your story, and connect with your
                customers. With a blend of modern design and intuitive
                functionality, ResellerBus sets the stage for you to build a
                stunning online store that captures your brand&apos;s essence and
                drives sales effortlessly.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Our mission is to help entrepreneurs and businesses thrive in
                the digital world. With customizable layouts, responsive design,
                and built-in tools for growth, ResellerBus makes it easier than
                ever to create a shopping experience that stands out.
              </p>

              {/* Smaller inline image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/hold.jpg"
                  alt="About us — our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Instagram Gallery ─── */}
      <section className="bg-[#F4F4F5] pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-1">Join us</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            @resellerbus
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
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

export default AboutPage;