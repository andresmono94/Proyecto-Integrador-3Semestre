function TablaAsistencia({ datos }) {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Alumno</th>
          <th>Asistencia</th>
          <th>Clase</th>
          <th>Docente</th>
          <th>Salón</th>
          <th>Hora</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((fila, index) => (
            <tr key={index}>
              <td>{fila.alumno}</td>
              <td>{fila.asistencia}</td>
              <td>{fila.clase}</td>
              <td>{fila.docente}</td>
              <td>{fila.salon}</td>
              <td>{fila.hora}</td>
              <td>{fila.fecha}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              No hay registros
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TablaAsistencia;