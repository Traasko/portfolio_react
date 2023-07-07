import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <>
      <header style={{ padding: "2%", backgroundColor: "lightgrey" }}>
        Je suis un header
      </header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li>
          <Link to="/about">Me concernant</Link>
        </li>

        <li>
          <Link to="/experience">Experience</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/skills">Compétences</Link>
        </li>
      </ul>

      {children}

      <footer style={{ padding: "2%", backgroundColor: "lightgrey" }}>
        Je suis un footer
      </footer>
    </>
  );
};

export default Navigation;
