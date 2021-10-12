import { Link } from "react-router-dom";
// import {} from "";

const Navigation = () => (
  <nav>
    <Link to="/"> HomePage </Link>
    <Link to="/projects"> My projects </Link>
    <Link to="/resume"> My resume </Link>
  </nav>
);

export default Navigation;
