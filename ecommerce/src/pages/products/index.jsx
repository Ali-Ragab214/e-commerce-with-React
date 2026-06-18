import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import ErrorMessage from "../../components/ui/ErrorMessage";

export function ErrorBoundary() {
  return (
    <ErrorMessage message="Failed to load products." />
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