import { usePackages } from "../../state/PackagesContext";

export default function PaquetesTable() {
  const { paquetes, actualizarEstado } = usePackages();
  return (
    <div className="overflow-auto border rounded">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <Th>N° Guía</Th><Th>Remitente</Th><Th>Destinatario</Th><Th>Estado</Th><Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {paquetes.map(p=>(
            <tr key={p._id} className="border-t">
              <Td>{p.numeroGuia}</Td>
              <Td>{p.remitente.nombre}</Td>
              <Td>{p.destinatario.nombre}</Td>
              <Td><span className="px-2 py-1 rounded bg-blue-100 text-blue-700">{p.estado}</span></Td>
              <Td><button className="px-2 py-1 bg-gray-800 text-white rounded"
                          onClick={()=>actualizarEstado(p._id)}>Cambiar estado</button></Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Th({children}){return <th className="text-left p-2">{children}</th>}
function Td({children}){return <td className="p-2">{children}</td>}
