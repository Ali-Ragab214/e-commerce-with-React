import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
export default

function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addToCart);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative bg-slate-50 h-52 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-all duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white text-indigo-600 text-xs font-medium px-3 py-1 rounded-full border border-indigo-100 capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.round(product.rating.rate) ? "text-amber-400" : "text-slate-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-slate-400 ml-1">({product.rating.count})</span>
        </div>

        {/* Price + Actions */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-2">
            <Link
              to={`/products/${product.id}`}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 text-xs"
            >
              View
            </Link>
            <button
              onClick={() => addItem(product)}
              className="px-3 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
