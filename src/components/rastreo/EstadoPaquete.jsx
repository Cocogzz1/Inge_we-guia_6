export default function EstadoPaquete({ data }) {
  return (
    <div className="border rounded p-3">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="text-sm text-gray-500">Guía</div>
        <div className="font-semibold">{data.numeroGuia}</div>
        <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">{data.estado}</span>
      </div>
      <div className="mt-2 grid md:grid-cols-2 gap-2 text-sm">
        <p><b>Remitente:</b> {data.remitente.nombre}</p>
        <p><b>Destinatario:</b> {data.destinatario.nombre}</p>
      </div>
    </div>
  );
}
