import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Shop<span className="text-indigo-500">Hub</span>
            </h2>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for quality products,
              great deals, and a seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                Products
              </Link>

              <Link
                to="/cart"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-gray-400 text-sm">
              <p>Email: support@shophub.com</p>
              <p>Phone: +20 100 000 0000</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              Support
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}