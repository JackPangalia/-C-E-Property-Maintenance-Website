
const coreValues = [
  {
    name: "Integrity",

    description: "We uphold the highest standards of honesty and ethical conduct in all our dealings.",
  },
  {
    name: "Reliability",

    description: "Our clients can always count on us to deliver consistent, high-quality work on time.",
  },
  {
    name: "Professionalism",

    description: "We approach every task with the utmost respect and expertise.",
  },
  {
    name: "Customer Satisfaction",

    description: "We go above and beyond to ensure our clients are delighted with our services.",
  },
]

export default function MissionValues() {
  return (
    <section id="services" className=" text-black">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-3xl lg:mt-0 mt-10 mb-10">Our core values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((values) => (
            <div
              key={values.name}
              className="bg-white/1 p-8  transition-transform duration-300 hover:-translate-y-2 " 
            >
              
              <h3 className="text-2xl mb-4">{values.name}.</h3>
              <p className="text-gray-600">{values.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

