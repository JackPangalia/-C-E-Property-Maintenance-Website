import Image from "next/image";

const services = [
  {
    name: "Pressure Washing",
    description:
      "Revitalize your surfaces with our high-powered cleaning.Including but not limited from Driveways, Sidewalks, Retaining walls, Gutters & Much more.",
    image: "/washingphot.jpg",
  },
  {
    name: "Lawn Care",
    description: "Keep your lawn lush and manicured with our expert care. We offer Edgeing, Lawn Mowing, Weed Wacking, Pruning.",
    image: "/lm1.jpg",
  },
  {
    name: "Leaf Removal",
    description: "Maintain a clean landscape with our efficient leaf removal",
    image: "/lb1.jpg",
  },
  {
    name: "Light Junk Removal",
    description: "Clear your space of unwanted items with our removal service.",
    image: "/junk removal.jpg",
  },
  {
    name: "Snow Removal",
    description:
      "Stay safe and accessible during winter with our snow clearing. We offer salting, sanding of driveways and all major walkways.",
    image: "/snow removal.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-3xl mb-10 font-bold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                width={400}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-900 text-md">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
