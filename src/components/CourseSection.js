import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import main from '../img/main.jpg';
import { Action, ActionBtn, TrialBtnDark } from '../styles';
import { btnAnimation } from '../animation';

const CourseSection = ({ setEnrollActive, setTrialActive }) => {
  return (
    <Course>
      <div className="parallax" />
      <Welcome>
        <div className="title">
          <h2>Do you want to </h2>
          <h2>sound like</h2>
          <h2>
            a
            {' '}
            <span>native speaker</span>
            {' '}
            in
            {' '}
            <span>Czech</span>
            ?
          </h2>
        </div>
        <p>Start to work on your pronunciation today and get rid of your accent!</p>
        <Action>
          <ActionBtn onClick={() => { setEnrollActive(true); }} variants={btnAnimation} initial="hidden" whileTap="tap">Enroll</ActionBtn>
          <TrialBtnDark onClick={() => setTrialActive(true)} variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtnDark>
        </Action>
      </Welcome>
    </Course>
  );
};

CourseSection.propTypes = {
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const Course = styled.div`
    min-height: 90vh;
    width: 100%;
    position: relative;
    .parallax{
        position: absolute;
        top: 0;
        left: 0;
        background: url(${main});
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h2 {
        color: #525252;
        margin-bottom: 0.5rem;

        @media (max-width: 500px){
            margin-bottom: 0.3rem;
        }
        @media (max-width: 320px){
            margin-bottom: 0;
        }
    }
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 3rem 5rem 3rem;
        text-align: center;
    }
`;

const Welcome = styled.div`
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    margin: auto;
    height: 80vh;
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #525252;
    background-color: white;
    padding: 2rem;
    .title, p {
        margin-bottom: 1.5rem;
        @media (max-width: 320px){
            margin-bottom: 1rem;
        }
    }
    .title {
        padding: 0.5rem;
    }
    p {
        font-size: 1.2rem;
        padding: 0rem 0.5rem;
    }
    span {
        font-weight: 900;
    }

    @media (max-width: 1200px){
        width: 55%;
    }

    @media (max-width: 1024px){
        width: 70%;
        height: 55vh;
    }

    @media (max-width: 768px){
        height: 70vh;
        width: 95%;
        .title {
            margin-top: 1.5rem;
        }
    }

    @media (max-width: 500px){
        min-height: 60vh;
        padding: 0;
    }
`;

export default CourseSection;
