import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}