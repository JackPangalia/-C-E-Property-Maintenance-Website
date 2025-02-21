import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl  mb-4">C&E Property Management</h3>
            <p className="text-gray-600">
              Professional property maintenance services you can trust.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["services", "about", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="text-gray-600 hover:text-black transition duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">Email: cepropertymaintenace@gmail.com</p>
            <p className="text-gray-600">Phone: 604-442-8874 or 604-760-4892</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} C&E Property Management Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
