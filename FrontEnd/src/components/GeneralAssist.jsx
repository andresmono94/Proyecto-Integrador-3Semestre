import { useEffect, useState } from "react";
import AssistsTable from "../components/AssistsTable";

function GeneralAssist() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    //llamada al backend
    fetch("http://localhost:5000/api/asistencias") // cambiar por endpoint real
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error("Error al traer datos:", err));
  }, []);

  return (
    <div>
      <h1>Asistencia General</h1>
      <AssistsTable datos={datos} />
    </div>
  );
}

export default GeneralAssist;