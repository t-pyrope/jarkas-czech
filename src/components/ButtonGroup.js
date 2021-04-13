import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionCenter, ActionBtn, TrialBtnDark, TrialBtn,
} from '../styles';
import { btnAnimation } from '../animation';

const ButtonGroup = ({ trialColor, setEnrollActive, setTrialActive }) => {
  return (
    <ActionCenter>
      <ActionBtn
        onClick={() => {
          setEnrollActive(true);
        }}
        variants={btnAnimation}
        initial="hidden"
        whileTap="tap"
      >
        Enroll
      </ActionBtn>
      {trialColor === 'dark'
        ? (
          <TrialBtnDark
            onClick={() => setTrialActive(true)}
            variants={btnAnimation}
            initial="hidden"
            whileTap="tap"
          >
            Try for free
          </TrialBtnDark>
        )
        : <TrialBtn onClick={() => setTrialActive(true)} variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtn>}
    </ActionCenter>
  );
};

ButtonGroup.propTypes = {
  trialColor: PropTypes.string.isRequired,
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

export default ButtonGroup;
