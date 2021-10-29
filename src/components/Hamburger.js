import { React } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Hamburger = ({ setIsHamOpen }) => {
    const history = useHistory();

    const onClick = (url) => {
        setIsHamOpen(false)
        history.push(url)
    }
    return(
        <HamburgerStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="hamburger"
                initial={{ x: 30, opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ type: "tween" }}
            >
                <ul>
                    <li>
                        <button onClick={() => onClick('/')}>
                            Our Course
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onClick("/team")}>
                            Our Team
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onClick("/contacts")}>
                            Contact Us
                        </button>
                    </li>
                </ul>
            </motion.div>
        </HamburgerStyled>
    )
}

export default Hamburger;

Hamburger.propTypes = {
    setIsHamOpen: PropTypes.func.isRequired,
};

const HamburgerStyled = styled(motion.div)`
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    width: 100%;
    height: 100%;

    .hamburger {
        position: absolute;
        top: 0;
        right: 0;
        left: 10%;
        bottom: 0;
        background-color: #f1f1f1;
        margin-top: 10vh;
        padding: 1rem;

        li {
            margin-bottom: 0.5rem;
        }
    }

    button {
        color: inherit;
    }
`
