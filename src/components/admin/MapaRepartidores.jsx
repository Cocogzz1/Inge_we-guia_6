import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { usePackages } from "../../state/PackagesContext";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
});

export default function MapaRepartidores() {
  const { repartidores } = usePackages();
  const center = [repartidores[0].lat, repartidores[0].lng];
  return (
    <MapContainer center={center} zoom={13} className="h-full w-full rounded border">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {repartidores.map(r=>(
        <Marker key={r.id} position={[r.lat, r.lng]} icon={icon}>
          <Popup>{r.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
