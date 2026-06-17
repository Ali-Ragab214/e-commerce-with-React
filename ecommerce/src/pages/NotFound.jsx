import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[75vh] px-6">
      <div className="text-center">

        <div className="relative">
          <h1 className="text-[120px] md:text-[180px] font-black text-slate-900">
            404
          </h1>

          <div className="absolute inset-0 blur-3xl opacity-30 bg-indigo-500 rounded-full" />
        </div>

        <h2 className="text-4xl font-bold text-slate-800">
          Lost in Space?
        </h2>

        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          The page you are trying to reach doesn't exist.
          Let's get you back to shopping.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
        >
          Return Home
        </Link>

      </div>
    </section>
  );
}