import { useState } from "react";
import { usePackages } from "../../state/PackagesContext";

export default function FormularioRastreo({ onFound }) {
  const { buscarPorGuia } = usePackages();
  const [q, setQ] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const p = buscarPorGuia(q.trim());
    if (!p) { alert("No se encontró el paquete"); onFound(null); return; }
    onFound(p);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input className="input flex-1" placeholder="Ingresa N° de guía"
             onChange={(e)=>setQ(e.target.value)} />
      <button className="px-3 py-2 bg-blue-600 text-white rounded">Buscar</button>
      <style>{`.input{padding:.5rem;border:1px solid #e5e7eb;border-radius:.5rem}`}</style>
    </form>
  );
}
