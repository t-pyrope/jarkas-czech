import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionCenter, ActionBtn, TrialBtnDark, TrialBtn,
} from '../styles';

const ButtonGroup = ({
  trialColor, setEnrollActive,
  setTrialActive, styles
}) => {
  return (
    <ActionCenter style={styles ?? {}}>
      <ActionBtn
        onClick={() => {
          setEnrollActive(true);
        }}
      >
        Enroll
      </ActionBtn>
      {trialColor === 'dark'
        ? (
          <TrialBtnDark
            onClick={() => setTrialActive(true)}
          >
            Try for free
          </TrialBtnDark>
        )
        : <TrialBtn onClick={() => setTrialActive(true)}>Try for free</TrialBtn>}
    </ActionCenter>
  );
};

ButtonGroup.propTypes = {
  trialColor: PropTypes.string.isRequired,
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

export default ButtonGroup;
