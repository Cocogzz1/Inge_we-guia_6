import { createContext, useContext, useMemo, useState } from "react";

const PackagesCtx = createContext(null);
export const usePackages = () => useContext(PackagesCtx);

const ESTADOS = ["En bodega", "En ruta", "Entregado", "Incidencia"];

const MOCK_PAQUETES = [
  {
    _id: "p1",
    numeroGuia: "ABC123",
    remitente: { nombre: "Juan", direccion: "Calle 1", telefono: "3001234567" },
    destinatario: { nombre: "Ana", direccion: "Cra 10", telefono: "3017654321" },
    dimensiones: { alto: 10, ancho: 20, largo: 30, peso: 2 },
    estado: "En bodega",
    ultimaUbicacion: { lat: 4.651, lng: -74.1 },
  },
  {
    _id: "p2",
    numeroGuia: "XYZ789",
    remitente: { nombre: "Luisa", direccion: "Av 68", telefono: "3020000000" },
    destinatario: { nombre: "Mario", direccion: "Cll 26", telefono: "3031111111" },
    dimensiones: { alto: 15, ancho: 25, largo: 35, peso: 3.2 },
    estado: "En ruta",
    ultimaUbicacion: { lat: 4.64, lng: -74.08 },
  },
];

const MOCK_REPARTIDORES = [
  { id: "r1", nombre: "Carlos", lat: 4.65, lng: -74.07 },
  { id: "r2", nombre: "Paola",  lat: 4.63, lng: -74.11 },
];

export function PackagesProvider({ children }) {
  const [paquetes, setPaquetes] = useState(MOCK_PAQUETES);

  const crearPaquete = (p) => {
    const _id = crypto.randomUUID();
    setPaquetes((prev) => [{ _id, ...p }, ...prev]);
  };

  const actualizarEstado = (_id) => {
    setPaquetes((prev) =>
      prev.map((p) => {
        if (p._id !== _id) return p;
        const idx = ESTADOS.indexOf(p.estado);
        const next = ESTADOS[(idx + 1) % ESTADOS.length];
        return { ...p, estado: next };
      })
    );
  };

  const buscarPorGuia = (guia) =>
    paquetes.find((p) => p.numeroGuia.toLowerCase() === guia.toLowerCase());

  const value = useMemo(
    () => ({
      paquetes,
      crearPaquete,
      actualizarEstado,
      buscarPorGuia,
      repartidores: MOCK_REPARTIDORES,
      ESTADOS,
    }),
    [paquetes]
  );

  return <PackagesCtx.Provider value={value}>{children}</PackagesCtx.Provider>;
}
