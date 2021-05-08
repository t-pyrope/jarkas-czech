/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navAnimation } from '../animation';

const Nav = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <NavStyled variants={navAnimation} initial="hidden" animate={scrolled ? 'show' : 'hidden'}>
      <h1><Link to="/">Jarka&#39;s Czech</Link></h1>
      <ul>
        <li>
          <Link to="/">Our Courses</Link>
          <Line initial={{ width: '0%' }} transition={{ duration: 0.4 }} animate={{ width: pathname === '/' ? '50%' : '0%' }} />
        </li>
        <li>
          <Link to="/team">Our Team</Link>
          <Line initial={{ width: '0%' }} transition={{ duration: 0.4 }} animate={{ width: pathname === '/team' ? '45%' : '0%' }} />

        </li>
        <li>
          <Link to="./contacts">Contact Us</Link>
          <Line initial={{ width: '0%' }} transition={{ duration: 0.4 }} animate={{ width: pathname === '/contacts' ? '50%' : '0%' }} />

        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    margin: auto;
    align-items: stretch;
    background-color: #82BBD6;
    color: white;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;

    ul {
        display: flex;
        height: inherit;
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
          &:hover {
            transform: translateY(-5%);
          }
        }
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
`;

const Line = styled(motion.div)`
    width: 0%;
    height: 2px;
    background-color: #324739;
    position: absolute;
    bottom: -15%;
    margin: auto;
`;

export default Nav;
