import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./NavBar.module.css";
import { CgMenuGridR } from "react-icons/cg";
import { AiTwotoneCloseSquare } from "react-icons/ai";

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () => {
            removeEventListener('resize', detectDimension)
        }
    }, [windowDimension])

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
    return (
        <div className={!navBarOpen ? styles.navBar : styles.navOpen}>
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
            {navBarOpen ||
                (windowDimension.width < 800 && (
                    <ul className={styles.linksContainer}>
                        {links.map((x) => (
                            <div>
                                <Link
                                    onClick={() => setNavBarOpen(false)}
                                    to={x.link}
                                    smooth
                                    duration={500}
                                    className={styles.navLink}
                                >{x.link === "HowWeWork" ? "How We Work" : x.link}
                                </Link>
                                <div className={styles.border}></div>
                            </div>
                        ))}
                    </ul>
                ))}
        </div>
    );
};

export default NavBar;
