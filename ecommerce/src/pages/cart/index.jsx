import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
          <p className="text-slate-400 mb-6">Add some products to get started!</p>
          <Link
            to="/products"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Shopping Cart ({cart.length})
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-600 transition"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-indigo-600 font-bold mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 transition text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
