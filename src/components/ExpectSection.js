import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledSection } from '../styles';
import List from './List';
import ButtonGroup from './ButtonGroup';

const ExpectSection = ({ setEnrollActive, setTrialActive }) => {
  const texts = [
    {
      header: 'Immediate access to all of out 13 courses',
      text: 'You can start practising your pronunciation immediately after enrolling and choose the most interesting for you from a variety of courses. Decide yourself which course you want to start from.',
    },
    {
      header: 'Effective tutoring system',
      text: 'You can start practising your pronunciation immediately after enrolling and choose the most interesting for you from a variety of courses. Decide yourself which course you want to start from.',
    },
    {
      header: 'Private facebook group',
      text: 'You will get access to the facebook group for our students, moderated by the teachers, where you can ask questions, communicate, and share your progress',
    },
  ];

  return (
    <ExpectStyled aria-label="what you get from our course">
      <h2>What can you expect from enrolment?</h2>
      <List icon="medal" objArr={texts} />
      <ButtonGroup trialColor="dark" setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
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
`;

export default ExpectSection;
