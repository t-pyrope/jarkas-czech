import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  StyledSection, Action, ActionBtn, Advantages, Advantage, TrialBtnDark,
} from '../styles';
import medal from '../img/medal.png';
import { btnAnimation } from '../animation';

const ExpectSection = ({ setEnrollActive, setTrialActive }) => {
  return (
    <ExpectStyled>
      <h2>What can you expect from enrolment?</h2>
      <Advantages>
        <Advantage>
          <img src={medal} alt="medal" />
          <div className="description">
            <h4>Immediate access to all of out 13 courses</h4>
            <p>
              You can start practising your pronunciation immediately after
              enrolling and choose the most interesting for you from a
              variety of courses.
              Decide yourself which course you want to start from.
            </p>
          </div>
        </Advantage>
        <Advantage>
          <img src={medal} alt="medal" />
          <div className="description">
            <h4>Effective tutoring system</h4>
            <p>
              Got stuck and don&#39;t know where to move next?
              Our teachers will navigate you and give
              their feedback on any problem you may encounter
            </p>
          </div>
        </Advantage>
        <Advantage>
          <img src={medal} alt="medal" />
          <div className="description">
            <h4>Private facebook group</h4>
            <p>
              You will get access to the facebook group
              for our students, moderated by the teachers,
              where you can ask questions, communicate, and share your progress
            </p>
          </div>
        </Advantage>
      </Advantages>
      <ActionExp>
        <ActionBtn onClick={() => { setEnrollActive(true); }} variants={btnAnimation} initial="hidden" whileTap="tap">Enroll</ActionBtn>
        <TrialBtnDark onClick={() => setTrialActive(true)} variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtnDark>
      </ActionExp>
    </ExpectStyled>
  );
};

ExpectSection.propTypes = {
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const ExpectStyled = styled(StyledSection)`
    h2 {
        text-align: center;
    }

    h4 {
        font-size: 1.2rem;
    }

`;

const ActionExp = styled(Action)`
    justify-content: center;
`;

export default ExpectSection;
