import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PackagesProvider } from "./state/PackagesContext";
import AdminDashboard from "./pages/AdminDashboard";
import PaginaRastreo from "./pages/PaginaRastreo";

export default function App() {
  return (
    <PackagesProvider>
      <BrowserRouter>
        <div className="p-4 flex gap-4 border-b">
          <Link to="/admin" className="text-blue-700 font-semibold">Panel Admin</Link>
          <Link to="/rastreo" className="text-blue-700 font-semibold">Rastreo Público</Link>
        </div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/rastreo" element={<PaginaRastreo />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PackagesProvider>
  );
}

function Home() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Logística</h1>
        <p className="text-gray-600">Elige una sección arriba</p>
      </div>
    </div>
  );
}

