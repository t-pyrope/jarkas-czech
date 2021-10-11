import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledSection } from '../styles';
import List from './List';
import ButtonGroup from './ButtonGroup';

const AdvantagesSection = ({ setEnrollActive, setTrialActive }) => {
  const texts = [
    {
      header: 'Good career choices',
      text: 'People, who speak Czech nice and fluent, have much more opportunities on the labor-market',
    },
    {
      header: 'Great first impression',
      text: "Don't wait til people get to know you, make them impressed from the first moment",
    },
    {
      header: 'Investment to your self-confidence',
      text: 'Czech pronunciation is a hard nut to crack! But you certainly can crack it — much easier with proper guidance and special 10 minutes of practice per day we offer you!',
    },
    {
      header: 'Better studying',
      text: 'Working on your accent not only helps with your career, but also with your study - getting fully engaged in discussions with your teacher or classmates has a positive effect for the whole process of studying!',
    },
  ];

  return (
    <StyledAdvantages aria-label="Benefits of the course">
      <div className="headline">
        <h2>What are the benefits of the course?</h2>
        <p>
          Pronunciation of Czech like a native speaker gives you more
          opportunities in your life
        </p>
      </div>
      <List icon="thumbsUp" objArr={texts} />
      <ButtonGroup
        trialColor="dark"
        setEnrollActive={setEnrollActive}
        setTrialActive={setTrialActive}
        styles={{marginTop: '1.5rem'}}
      />

    </StyledAdvantages>
  );
};

AdvantagesSection.propTypes = {
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const StyledAdvantages = styled(StyledSection)`
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1.4rem;
  }

  h2 {
    margin-bottom: 0.7rem;
  }

  .headline {
    text-align: center;
    margin-bottom: 3rem;
  }
  .headline > p {
    font-size: 1.2rem;
  }
`;

export default AdvantagesSection;
