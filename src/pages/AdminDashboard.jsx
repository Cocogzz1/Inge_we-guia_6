import PaqueteForm from "../components/admin/PaqueteForm";
import PaquetesTable from "../components/admin/PaquetesTable";
import MapaRepartidores from "../components/admin/MapaRepartidores";

export default function AdminDashboard() {
  return (
    <div className="p-4 grid gap-4 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Crear paquete</h2>
        <PaqueteForm />
        <h2 className="text-xl font-semibold">Paquetes</h2>
        <PaquetesTable />
      </div>
      <div className="h-[70vh]">
        <h2 className="text-xl font-semibold mb-2">Repartidores</h2>
        <MapaRepartidores />
      </div>
    </div>
  );
}
