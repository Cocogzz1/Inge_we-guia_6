import { useState } from "react";
import { usePackages } from "../../state/PackagesContext";

export default function PaqueteForm() {
  const { crearPaquete, ESTADOS } = usePackages();
  const [form, setForm] = useState({
    numeroGuia: "",
    remitente: { nombre: "", direccion: "", telefono: "" },
    destinatario: { nombre: "", direccion: "", telefono: "" },
    dimensiones: { alto: "", ancho: "", largo: "", peso: "" },
    estado: ESTADOS[0],
    ultimaUbicacion: { lat: 4.65, lng: -74.1 },
  });

  const onChange = (path) => (e) => {
    const v = e.target.value;
    setForm((f) => {
      const copy = structuredClone(f);
      let ref = copy;
      const parts = path.split(".");
      while (parts.length > 1) ref = ref[parts.shift()];
      ref[parts[0]] = v;
      return copy;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.numeroGuia.trim()) return alert("Número de guía requerido");
    crearPaquete({
      ...form,
      dimensiones: Object.fromEntries(
        Object.entries(form.dimensiones).map(([k, v]) => [k, Number(v)])
      ),
      ultimaUbicacion: {
        lat: Number(form.ultimaUbicacion.lat),
        lng: Number(form.ultimaUbicacion.lng),
      },
    });
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-2 p-3 border rounded">
      <input className="input" placeholder="Número de guía" onChange={onChange("numeroGuia")} />
      <div className="grid grid-cols-2 gap-2">
        <input className="input" placeholder="Remitente nombre" onChange={onChange("remitente.nombre")} />
        <input className="input" placeholder="Remitente teléfono" onChange={onChange("remitente.telefono")} />
        <input className="input col-span-2" placeholder="Remitente dirección" onChange={onChange("remitente.direccion")} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input className="input" placeholder="Destinatario nombre" onChange={onChange("destinatario.nombre")} />
        <input className="input" placeholder="Destinatario teléfono" onChange={onChange("destinatario.telefono")} />
        <input className="input col-span-2" placeholder="Destinatario dirección" onChange={onChange("destinatario.direccion")} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["alto","ancho","largo","peso"].map((k)=>(
          <input key={k} className="input" type="number" step="any" placeholder={k}
                 onChange={onChange(`dimensiones.${k}`)} />
        ))}
      </div>
      <button className="px-3 py-2 bg-blue-600 text-white rounded">Crear paquete</button>
      {/* estilos tailwind reutilizables */}
      <style>{`.input{padding:.5rem;border:1px solid #e5e7eb;border-radius:.5rem}`}</style>
    </form>
  );
}
