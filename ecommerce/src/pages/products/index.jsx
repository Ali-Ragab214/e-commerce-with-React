import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";

export function ErrorBoundary() {
  return (
    <div className="flex items-center justify-center min-h-[75vh] px-6">
      <div className="text-center">
        <div className="text-6xl mb-6">😕</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          We couldn't load the products. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}


export default function Products() {
  const products = useLoaderData();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
          <p className="text-slate-400 mt-1">{products.length} items available</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}