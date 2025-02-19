import Image from "next/image";

export default function Mission() {
  return (
    <section id="about" className="pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="md:text-4xl text-3xl mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-16 text-lg">
              To provide exceptional property maintenance services that exceed
              our clients' expectations through quality workmanship, integrity,
              and reliability at fair prices. We strive to enhance the beauty
              and value of every property we touch, creating lasting
              relationships with our clients built on trust and excellence.
            </p>

            <h2 className = 'md:text-4xl text-3xl mb-6'>Our Vision</h2>
            <p className="text-gray-600 mb-6 text-lg">
              To become the premier property maintenance provider in our
              community, recognized for our unwavering dedication to service
              excellence, innovative solutions, and sustainable practices. We
              aspire to set new industry standards and inspire others through
              our commitment to both our clients and the environment.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/lm2.jpg"
              alt="Our team at work"
              width={1920}
              height={1080}
              className=" shadow-lg aspect-[3/2] object-cover"
            />
            {/* <img src="/placeholder.svg?height=600&width=800" alt="Our team at work" className="rounded-lg shadow-lg" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
