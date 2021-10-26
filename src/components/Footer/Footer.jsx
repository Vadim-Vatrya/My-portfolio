import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <span className={styles.copy}>
          &#169; 2021 | All Rights Reserved | Developed by
        </span>
        <p className={styles.name}> Vadim Vatrya </p>
      </footer>
    </>
  );
};

export default Footer;
