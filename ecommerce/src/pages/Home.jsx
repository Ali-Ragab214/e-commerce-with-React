import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCartStore } from "../store/cartStore";

function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addToCart);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
      <div className="relative bg-slate-50 h-48 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white text-indigo-600 text-xs font-medium px-3 py-1 rounded-full border border-indigo-100 capitalize">
          {product.category}
        </span>
      </div>


      <div className="p-4">
        <h2 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-3 group-hover:text-indigo-600 transition-colors">
          {product.title}
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("https://fakestoreapi.com/products?limit=8"),
      axios.get("https://fakestoreapi.com/products/categories"),
    ]).then(([products, cats]) => {
      setFeatured(products.data);
      setCategories(cats.data);
    }).finally(() => setLoading(false));
  }, []);

  const categoryIcons = {
    "electronics": "🖥️",
    "jewelery": "💍",
    "men's clothing": "👔",
    "women's clothing": "👗",
  };

  return (
    <div className="min-h-screen bg-slate-50">
{/* Hero */}
<section className="bg-[#0a0f1e] relative overflow-hidden">

  {/* Blobs */}
  <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full opacity-20"
    style={{ background: "radial-gradient(circle, #4f46e5, transparent 70%)" }} />
  <div className="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full opacity-15"
    style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }} />

  {/* Grid */}
  <div className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
      backgroundSize: "50px 50px",
    }} />

  <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">

    {/* Card */}
    <div
      className="rounded-3xl border border-white/10 p-10 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 0 0 1px rgba(99,102,241,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          New arrivals every week
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
          Discover Products <br />
          <span className="text-indigo-400">You'll Love</span>
        </h1>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-md">
          Shop the latest trends with unbeatable prices and fast delivery right to your door.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            to="/products"
            className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-500 active:scale-95 transition-all duration-200 no-underline"
            style={{ boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}
          >
            Shop Now →
          </Link>
          <Link
            to="/products"
            className="px-6 py-2.5 border border-white/10 text-slate-300 text-sm font-medium rounded-xl hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-200 no-underline"
          >
            View All
          </Link>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">
          {[
            { emoji: "🚚", text: "Free Shipping" },
            { emoji: "🔒", text: "Secure Payment" },
            { emoji: "↩️", text: "Easy Returns" },
          ].map(({ emoji, text }) => (
            <div
              key={text}
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/8 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default"
            >
              <span className="text-sm">{emoji}</span>
              <span className="text-slate-400 text-xs">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 mt-4">
      {[
        { label: "Products", value: "200+" },
        { label: "Happy Customers", value: "10K+" },
        { label: "Categories", value: "4" },
      ].map(({ label, value }) => (
        <div
          key={label}
          className="text-center rounded-2xl border border-white/5 py-4 transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.02] cursor-default"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="text-xl font-bold text-white">{value}</div>
          <div className="text-slate-500 text-xs mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Shop by Category</h2>
            <p className="text-slate-400 text-sm mt-1">Find what you're looking for</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="group bg-white border border-slate-100 hover:border-indigo-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 no-underline"
            >
              <div className="text-4xl mb-3">{categoryIcons[cat] || "📦"}</div>
              <div className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors capitalize">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-400 text-sm mt-1">Handpicked just for you</p>
          </div>
          <Link
            to="/products"
            className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors no-underline"
          >
            View all →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 animate-pulse">
                <div className="bg-slate-200 h-48" />
                <div className="p-4 space-y-3">
                  <div className="bg-slate-200 h-4 rounded w-3/4" />
                  <div className="bg-slate-200 h-4 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: "#0a0f1e" }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to start shopping?
            </h2>
            <p className="text-slate-400 mb-8">
              Explore hundreds of products at amazing prices.
            </p>
            <Link
              to="/products"
              className="inline-block px-10 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-200 no-underline"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}