import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
// import {} from "";

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <>
      <button>
        {isOpenMenu ? (
          <MdClose size="40" onclick={menuToggle} />
        ) : (
          <MdMenu size="40" onclick={menuToggle} />
        )}
      </button>
      <nav menuToggle={isOpenMenu}>
        <Link to="/"> HomePage </Link>
        <Link to="/projects"> My projects </Link>
        <Link to="/resume"> My resume </Link>
      </nav>
    </>
  );
};

export default Navigation;
