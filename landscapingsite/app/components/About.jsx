import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="md:text-4xl text-3xl mb-6">About Us</h2>
            <p className="text-gray-600 mb-6 text-lg">
              C&E Property Maintenance Ltd. is a dedicated company offering
              professional property maintenance services. We take pride in our
              exceptional work ethic, reliability, and transparent pricing.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our journey began with a passion for creating beautiful,
              well-maintained spaces for our clients. What sets us apart is our
              unwavering commitment to quality and customer satisfaction.
            </p>
            <p className="text-gray-600 text-lg">
              We ensure that every job, no matter how big or small, is completed
              to the highest standard. Our team treats your property with the
              same care and attention we would give our own.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/lm3.jpg"
              alt="Our team at work"
              width={1920}
              height={1080}
              className=" shadow-lg aspect-[3/2] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
