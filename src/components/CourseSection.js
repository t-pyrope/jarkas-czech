import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mainH564W700 from '../img/main-h564-w700.jpg';
import mainH1050W700 from '../img/main-h1050-w700.jpg';
import mainH2000W1333 from '../img/main-h2000-w1333.jpg';
import ButtonGroup from './ButtonGroup';

const CourseSection = ({ setEnrollActive, setTrialActive }) => {
  return (
    <Course aria-label="intro to course">
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
        <ButtonGroup trialColor="dark" setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
      </Welcome>
    </Course>
  );
};

CourseSection.propTypes = {
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const Course = styled.section`
    min-height: 90vh;
    width: 100%;
    position: relative;
    .parallax{
        position: absolute;
        top: 0;
        left: 0;
        background: url(${mainH2000W1333});
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        @media (max-width: 700px) {
            background: url(${mainH1050W700})
        }

        @media (max-width: 564px) and (max-height: 700px) {
            background: url(${mainH564W700})
        }

    }

    h2 {
        color: #525252;
        margin-bottom: 0.3rem;

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
        padding-bottom: 0.7rem;
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
