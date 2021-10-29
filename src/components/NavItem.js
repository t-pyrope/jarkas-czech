import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavItem = ({ link, title }) => {
    const { pathname } = useLocation();
    return(
        <li>
            <Link to={link}>{title}</Link>
            <Line
                initial={{ width: '0%' }}
                transition={{ duration: 0.3 }}
                animate={{ width: pathname === link ? '45%' : '0%' }}
            />
        </li>
    )
}

export default NavItem;

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

const Line = styled(motion.div)`
    width: 0%;
    height: 2px;
    background-color: #324739;
    position: absolute;
    bottom: -5%;
    margin: auto;
`;
