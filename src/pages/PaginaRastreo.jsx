import { useState } from "react";
import FormularioRastreo from "../components/rastreo/FormularioRastreo";
import EstadoPaquete from "../components/rastreo/EstadoPaquete";
import MapaRastreo from "../components/rastreo/MapaRastreo";

export default function PaginaRastreo() {
  const [paquete, setPaquete] = useState(null);
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Rastreo de paquete</h1>
      <FormularioRastreo onFound={setPaquete} />
      {paquete ? (
        <>
          <EstadoPaquete data={paquete} />
          <div className="h-[60vh]">
            <MapaRastreo paquete={paquete} />
          </div>
        </>
      ) : (
        <p className="text-gray-600">Ingresa el número de guía para ver el estado.</p>
      )}
    </div>
  );
}
