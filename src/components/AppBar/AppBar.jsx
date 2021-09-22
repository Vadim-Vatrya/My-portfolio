import Navigation from "../Navigation/Navigation";
import laptop from "../../images/laptop.svg";
import styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <a href="/" arial-label="logoLaptop">
        <img src={laptop} alt="logoLaptop" className={styles.logo} />
      </a>
      <Navigation />
    </header>
  );
};

export default AppBar;
