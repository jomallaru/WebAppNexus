import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./NavBar.module.css";
import { CgMenuGridR } from "react-icons/cg";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

   useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);


     const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
  ];

  const scrollPosition = useScrollPosition();

    return (
        
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
            {!navBarOpen && <p className={styles.logo}>WebApp nexus| Desarrollo de Aplicaciones Web</p>}
            {!navBarOpen && windowDimension.width < 800 ? (
                <CgMenuGridR onClick={() => setNavBarOpen(!navBarOpen)} size={30} />
            ) : (

                windowDimension.width < 800 && (
                    <AiTwotoneCloseSquare
                        onClick={() => setNavBarOpen(!navBarOpen)}
                        size={30}
                        color='#f1f1f1'
                    />
                )
            )}
            {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "HowWeWork" ? "How we work" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "HowWeWork" ? "How we work" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};
export default NavBar;