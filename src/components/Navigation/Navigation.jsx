import { useState } from "react";
import { Link } from "react-router-dom";
// import {} from "";

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <>
      <nav>
        <Link to="/"> HomePage </Link>
        <Link to="/projects"> My projects </Link>
        <Link to="/resume"> My resume </Link>
      </nav>
    </>
  );
};

export default Navigation;
