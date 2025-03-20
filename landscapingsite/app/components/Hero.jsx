"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  // Array of slide data with images, headings, subheadings, and links
  const slides = [
    {
      image: "/image1.jpg",
      heading: "Elevate Your Property",
      subheading: "With presure washing",
      link: "/services",
      linkText: "Learn more",
    },
    {
      image: "/image0.jpeg",
      heading: "Elevate Your Property",
      subheading: "With roof clearning",
      link: "/services",
      linkText: "Learn more",
    },
    {
      image: "/image2.jpeg",
      heading: "Elevate Your Property",
      subheading: "With lawn care",
      link: "/services",
      linkText: "Learn more",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60 flex items-start justify-center flex-col">
            <h2 className="text-white rounded-full lg:text-6xl md:text-5xl text-4xl transition-all duration-300 lg:ml-[15rem] md:ml-[8rem] ml-[1rem]">
              {slide.heading}
            </h2>
            <p className="text-zinc-200 lg:text-xl md:text-lg  lg:ml-[15rem] md:ml-[8rem] ml-[1rem] mt-2">
              {slide.subheading}
            </p>
            <Link
              href={slide.link}
              className="lg:ml-[15rem] md:ml-[8rem] ml-[1rem] text-white border-[1px] lg:px-10 lg:py-2 md:px-8 md:py-1 py-1 px-4 mt-4 md:text-lg hover:bg-black hover:bg-opacity-30 transition-all duration-300"
            >
              {slide.linkText}
            </Link>
          </div>
        </div>
      ))}

      {/* Optional: Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

