import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import {navAnimation} from '../animation';

const Nav = () => {
    const {pathname} = useLocation();
    const [scrolled, setScrolled] = useState(false);
    
    const scrollHandler = () => {
        if(window.scrollY >= 20){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }


    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler);
    }, [])

    return(
        <NavStyled variants={navAnimation} initial="hidden" animate={scrolled ? "show" : "hidden"}>
            <h1><Link to="/">Jarka's Czech</Link></h1>
            <ul>
                <li>
                    <Link to ="/">Our Courses</Link>
                    <Line initial={{width: "0%"}} transition={{duration: 0.4}} animate={{width: pathname === "/" ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link to="/team">Our Team</Link>
                    <Line initial={{width: "0%"}} transition={{duration: 0.4}} animate={{width: pathname === "/team" ? "45%" : "0%"}} />

                </li>
                <li>
                    <Link to="./contacts">Contact Us</Link>
                    <Line initial={{width: "0%"}} transition={{duration: 0.4}} animate={{width: pathname === "/contacts" ? "50%" : "0%"}} />

                </li>
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    margin: auto;
    align-items: center;
    /* background-color: #569fc0; */
    background-color: #82BBD6;
    color: white;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    /* box-shadow: 0px 1px 3px #317392; */

    ul {
        display: flex;
    }

    li{
        padding-left: 5rem;
        position: relative;
    }

    @media (max-width: 1300px) {
        padding: 1rem 4rem;
        text-align: center;
        li {
            padding-left: 2rem;
        }
    }

    @media (max-width: 768px){
        padding: 1rem 2rem;

        li:first-child{
            padding-left: 0rem;
        }
    }

    @media (max-width: 320px) {
        display: block;
        padding: 0.5rem 1rem;
    }
`

const Line = styled(motion.div)`
    width: 0%;
    height: 2px;
    /* background-image: linear-gradient(to right, #569fc0, #82bbd6, #82bbd6, #569fc0); */
    background-color: #324739;
    position: absolute;
    bottom: -35%;
    margin: auto;
    
`

export default Nav;