import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecommendationsState from '../recommendations';
import ButtonGroup from './ButtonGroup';

const RecommendationSection = ({ setEnrollActive, setTrialActive }) => {
  const [recs] = useState(RecommendationsState);

  return (
    <RecStyled aria-label="testimonials">
      <div className="title">
        <h2>What our students say</h2>
      </div>
      <Recommendations>
        {recs.map((rec) => (
          <Recommendation className="single-rec" author={rec.name} image={rec.img} text={rec.text} key={rec.img} />
        ))}
      </Recommendations>
      <ButtonGroup trialColor="white" setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />

    </RecStyled>
  );
};

const RecStyled = styled.section`
    width: 100%;
    padding: 4rem 10rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 85vh;
    background: linear-gradient(to right,#412d4e, #4a3757);

    h2 {
        text-align: center;
        color: white;
        margin-bottom: 3rem;
    }

    @media (max-width: 1200px){
        padding: 4rem 2rem;

        h2 {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 600px) {
        padding: 3rem 0.5rem;

        h2 {
            margin-bottom: 0;
        }
    }
`;

RecommendationSection.propTypes = {
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const Recommendations = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;

    @media (max-width: 1200px){
        display: block;

    }
`;

const RecStyle = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    h4 {
        margin-bottom: 0.8rem;
        text-align: center;
    }
    p {
        text-align: center;
        font-style: italic;
    }

    @media (max-width: 1200px){
        width: 80%;
        flex-direction: row;
        margin: 3rem auto;
        .description {
            margin-left: 2.5rem;
        }
        p {
            text-align: left;
        }
        h4{
            text-align: left;
        }
    }

    @media (max-width: 500px){
        flex-direction: column;
        margin: 2rem auto;
        .description {
            margin-left: 0;
        }
        p, h4 {
            text-align: center;
        }

        &:last-child {
          margin-bottom: 0;
        }
    }
`;

const Recommendation = ({ author, image, text }) => {
  return (
    <RecStyle>
      <img src={image} alt="student" />
      <div className="description">
        <h4>{author}</h4>
        <p>{text}</p>
      </div>
    </RecStyle>
  );
};

Recommendation.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RecommendationSection;
