import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/general-assist">Asistencia General</Link>
        </li>
        <li>
          <Link to="/class-assist">Asistencia por Curso</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;