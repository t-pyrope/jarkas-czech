import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import thumbsUp from '../img/thumbs-up.png';
import {
  Action,
  ActionBtn,
  TrialBtnDark,
  StyledSection,
  Advantages,
  Advantage,
} from '../styles';
import { btnAnimation } from '../animation';

const AdvantagesSection = ({ setEnrollActive, setTrialActive }) => (
  <StyledAdvantages>
    <div className="headline">
      <h2>What are the benefits of the course?</h2>
      <p>
        Pronunciation of Czech like a native speaker gives you more
        opportunities in your life
      </p>
    </div>
    <Advantages>
      <Advantage>
        <img src={thumbsUp} alt="thumbs up" />
        <div className="description">
          <h4>Good career choices</h4>
          <p>
            People, who speak Czech nice and fluent, have much more
            opportunities on the labor-market
          </p>
        </div>
      </Advantage>
      <Advantage>
        <img src={thumbsUp} alt="thumbs up" />
        <div className="description">
          <h4>Great first impression</h4>
          <p>
            Don&#39;t wait til people get to know you, make them impressed from the
            first moment
          </p>
        </div>
      </Advantage>
      <Advantage>
        <img src={thumbsUp} alt="thumbs up" />
        <div className="description">
          <h4>Investment to your self-confidence</h4>
          <p>
            Czech pronunciation is a hard nut to crack! But you certainly can
            crack it — much easier with proper guidance and special 10 minutes
            of practice per day we offer you!
          </p>
        </div>
      </Advantage>
      <Advantage>
        <img src={thumbsUp} alt="thumbs up" />
        <div className="description">
          <h4>Better studying</h4>
          <p>
            Working on your accent not only helps with your career, but also
            with your study - getting fully engaged in discussions with your
            teacher or classmates has a positive effect for the whole process of
            studying!
          </p>
        </div>
      </Advantage>
    </Advantages>
    <ActionAdv>
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
      <TrialBtnDark
        onClick={() => setTrialActive(true)}
        variants={btnAnimation}
        initial="hidden"
        whileTap="tap"
      >
        Try for free
      </TrialBtnDark>
    </ActionAdv>
  </StyledAdvantages>
);

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

  .headline {
    text-align: center;
    margin-bottom: 3rem;
  }
  .headline > p {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.2rem;
  }
`;

const ActionAdv = styled(Action)`
  justify-content: center;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export default AdvantagesSection;
