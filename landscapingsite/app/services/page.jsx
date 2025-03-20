import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "pressure-washing",
      title: "Pressure Washing",
      description:
        "Our professional pressure washing service will restore the sparkle to your sidewalks and driveways, leaving them looking as good as new.",
      additionalText:
        "Our pressure washing service will revitalize your surfaces, using eco-friendly and Canadian products for a sustainable clean.",
      video: "/presurewashing.mp4", // Video file for pressure washing
      image: "/hero_house.jpg", // Keep the image as fallback
      features: ["Driveways", "Sidewalks", "Retaining Walls", "Gas Stations", "Garbage Bin Pads", "& Much More"],
    },
    {
      id: "roof-wash",
      title: "Roof Wash and De-mossing",
      description:
        "Say goodbye to moss and grime on your roof with our thorough roof wash and de-mossing service, ensuring the longevity of your roof.",
      additionalText:
        "Trust our roof wash and de-mossing service to protect your roof with eco-friendly solutions and Canadian-made products for lasting results.",
      image: "/roofing.jpg",
      features: [
        "Roof & Gutter cleaning",
        "Roof Shingle cleaning",
        "Green Algae and Moss treatments",
        "Long-lasting results",
      ],
    },
    {
      id: "lawn-garden",
      title: "Lawn & Garden Maintenance",
      description:
        "Keep your lawn looking pristine with our lawn maintenance service, including mowing, trimming, and striping for a manicured finish.",
      additionalText:
        "Keep your lawn in top condition with our professional lawn maintenance service, offering trimming, mowing, and striping for a polished look.",
      image: "/grassandflowers.jpg",
      features: [
        "Manicured lawn finish",
        "Trimming and striping",
        "Professional maintenance",
        "Leaf blowing & Removal",
        "Flower bed maintenance",
        "Flower and shrub planting",
      ],
    },
  ]

  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Header Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/pexels-dianne-60973-226407.jpg"
          alt="Services Header"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col">
          <h1 className="text-white text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl text-center px-4">
            Professional property maintenance solutions to elevate and protect your investment
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} mb-24 gap-8`}
          >
            <div className="lg:w-1/2 relative h-[400px] overflow-hidden">
              {service.id === "pressure-washing" && service.video ? (
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src={service.video} type="video/mp4" />
                  {/* Fallback to image if video fails to load */}
                  Your browser does not support the video tag.
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </video>
              ) : (
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              )}
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-gray-900 text-3xl md:text-4xl mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-gray-700 mb-6">{service.additionalText}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 mr-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href='/#contact'
                  className="inline-block bg-transparent text-gray-900 border border-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Get in contact
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

