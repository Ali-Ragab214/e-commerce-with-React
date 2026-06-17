import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Shop<span className="text-indigo-500">Hub</span>
          </h1>

          {/* Links */}
          <div className="flex items-center gap-3">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/products" className={linkStyle}>
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className="relative px-4 py-2 rounded-lg font-medium text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Cart

              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}