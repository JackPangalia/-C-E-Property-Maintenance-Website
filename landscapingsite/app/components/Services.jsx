
const services = [
  { name: "Pressure Washing", description: "Revitalize your surfaces with our high-powered cleaning." },
  { name: "Lawn Care",  description: "Keep your lawn lush and manicured with our expert care." },
  {
    name: "Leaf Removal",
    description: "Maintain a clean landscape with our efficient leaf removal",
  },
  { name: "Junk Removal", description: "Clear your space of unwanted items with our removal service." },
  {
    name: "Snow Removal",
    description: "Stay safe and accessible during winter with our snow clearing.",
  },

]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-3xl mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white/1 p-8 transition-transform duration-300 hover:-translate-y-2 " 
            >
              
              <h3 className="text-2xl mb-4">{service.name}.</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

