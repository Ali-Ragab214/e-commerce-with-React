import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Navbar() {
  const cartCount = useCartStore((s) => s.cart.length);
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-indigo-500/20 text-[#818cf8] border border-indigo-500/30"
        : "text-slate-500 hover:text-[#818cf8] hover:bg-white/5"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1e] border-b border-white/5 backdrop-blur-xl">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-semibold text-white tracking-wide"
          >
            Shop<span className="text-[#818cf8]">Hub</span>
          </NavLink>

          {/* Links */}
          <div className="flex items-center gap-2">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500/20 text-[#818cf8] border border-indigo-500/30"
                    : "text-slate-500 hover:text-[#818cf8] hover:bg-white/5"
                }`
              }
            >
              <span>🛒</span>
              Cart

                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-[#818cf8] text-white text-[10px] flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
                )}
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}