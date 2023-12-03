import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>Potencia tu emprendimiento<br />
          <b>Desata tu potencial</b>
        </p>
        <p>
        Conquista nuevos horizontes con una presencia online excepcional  <br />
        
          <b>WebApp Nexus.</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Get in Touch
        </Link>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default Home;