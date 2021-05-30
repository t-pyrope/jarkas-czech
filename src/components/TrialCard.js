import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { TrialBtnDark } from '../styles';
import { cardAnimation, btnAnimation } from '../animation';
import cancel from '../img/cancel.png';

const TrialCard = ({ setTrialActive }) => {
  const exitCardHandler = (e) => {
    if (e.target.classList.contains('wrapper')) {
      setTrialActive(false);
    }
  };
  return (
    <Wrapper className="wrapper" onClick={exitCardHandler}>
      <Card className="card" variants={cardAnimation} initial="hidden" animate="show" exit="exit">
        <div className="card-header">
          <p>Try for free for 3 days</p>
          <button type="button" aria-label="go back" onClick={() => setTrialActive(false)}>
            <img src={cancel} alt="" />
          </button>
        </div>
        <div className="card-body">
          <h3>What you will get</h3>
          <div className="line" />
          <ul>
            <li> Access to all of 13 courses for 3 days (new added frequently)</li>
            <li>Daily plan for training</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <TrialBtnDark variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtnDark>
        </div>
      </Card>
    </Wrapper>
  );
};

TrialCard.propTypes = {
  setTrialActive: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8;
`;

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: white;
    box-shadow: 1px 0px 10px #5c5c5c;;
    width: 60%;
    margin: 0rem 2rem;

    @media (max-width: 1300px){
        width: 80%;
        margin: 1rem auto 3rem;
    }

    .card-header {
        background-color: #2c2c4b;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.6rem;
        display: flex;
        justify-content: space-between;
        p {
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: white;
            margin-left: 1.3rem;
        }

        button {
          background: transparent;
          border: none;
          img {
            width: 1rem;
            height: 1rem;
            mix-blend-mode: initial;
            transition: all 0.4s ease-in-out;
          }
        }
    }

    .card-body {
        padding: 1.5rem;
        ul {
            margin: 1.5rem 1rem;
        }
        li {
            margin-bottom: 1rem;
        }
        .line {
            width: 100%;
            height: 0.2rem;
            background-color: #808080;
        }
    }

    h3 {
        display: flex;
        margin-bottom: 1rem;
    }

    .price {
        font-size: 6rem;
    }

    .per {
        margin-top: 1rem;
        margin-left: 0.3rem;
    }
`;

export default TrialCard;
