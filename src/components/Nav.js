/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navAnimation } from '../animation';

import NavItem from './NavItem';
import Hamburger from './Hamburger';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const toggleMenu = () => {
    setIsHamOpen(!isHamOpen);
  }

  return (
    <>
      <AnimatePresence>
        {isHamOpen && <Hamburger setIsHamOpen={setIsHamOpen} />}
      </AnimatePresence>
      <NavStyled
        variants={navAnimation}
        initial="hidden"
        animate={scrolled ? 'show' : 'hidden'}
      >
        <h1><Link to="/">Jarka&#39;s Czech</Link></h1>
        <ul>
          <NavItem link="/" title="Our Course"/>
          <NavItem link="/team" title="Our Team"/>
          <NavItem link="/contacts" title="Contact Us"/>
        </ul>
        <div
          className="hamburger-button"
          onClick={toggleMenu}
        >
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </NavStyled>
    </>
  );
};

const NavStyled = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    margin: auto;
    align-items: stretch;
    color: white;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;

    ul {
        display: flex;
        height: inherit;
        @media (max-width: 768px){
          margin-left: 0.5rem;
        }
    }

    li{
        padding-left: 5rem;
        position: relative;
        height: 100%;
        a {
          display: block;
          transition: all 0.3s ease;
          height: inherit;
          display: flex;
          align-items: center;
          font-weight: bold;
          transition: all 0.4s ease;
          &:hover {
            color: #d6d6d6;
          }
        }
    }

    .hamburger-button {
      display: none;
      width: 2rem;
      height: 2rem;
      justify-content: space-around;
      flex-flow: column nowrap;
    }

    @media (max-width: 1300px) {
        padding: 1rem 4rem;
        text-align: center;
        li {
            padding-left: 2rem;
        }
    }

    @media (max-width: 768px){
        padding: 0.7rem 1rem;
        align-items: center;

        ul {
          display: none;
        }

        .hamburger-button {
          display: flex;
        }

        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: rgba(0,0,0,0.4);
          transform-origin: 1px;
        }
    }
`;

export default Nav;
