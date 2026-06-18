import ErrorMessage from "../../components/ui/ErrorMessage";
import { useLoaderData } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export function ErrorBoundary() {
  return (
    <ErrorMessage message="Failed to load product details." />
  );
}

export default function ProductDetails() {
 const product = useLoaderData();
 const { addToCart } = useCartStore();

 return (
   <div className="min-h-screen bg-slate-50">
     <div className="max-w-7xl mx-auto px-6 py-10">

       {/* Product Details */}
       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
         <img
           src={product.image}
           alt={product.title}
           className="w-full md:w-1/3 h-auto object-contain"
         />
         <div className="flex-1">
           <h1 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h1>
           <p className="text-slate-700 mb-4">{product.description}</p>
           <div className="text-xl font-semibold text-green-600 mb-4">${product.price}</div>
           <button
             onClick={() => addToCart(product)}
             className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
           >
             Add to Cart
           </button>
         </div>
       </div>

     </div>
   </div>
 ); 
}