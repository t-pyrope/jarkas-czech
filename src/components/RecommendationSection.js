import React, {useState} from 'react';
import styled from 'styled-components';
import {RecommendationsState} from '../recommendations';
import {Action, ActionBtn, TrialBtn} from '../styles';
import {btnAnimation} from '../animation';

const RecommendationSection = ({setEnrollActive, setTrialActive}) => {
    const [recs, setRecs] = useState(RecommendationsState);

    return(

        <RecStyled>
            <div className="title">
                <h2>What our students say</h2>
            </div>
            <Recommendations>
                {recs.map((rec) => (
                    <Recommendation className="single-rec" author={rec.name} image={rec.img} text={rec.text} key={rec.img} />
                ))}
            </Recommendations>
            <Action>
                    <ActionBtn onClick={() => {setEnrollActive(true)}} variants={btnAnimation} initial="hidden" whileTap="tap">Enroll</ActionBtn>
                    <TrialBtn onClick={() => setTrialActive(true)} variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtn>
            </Action>
        </RecStyled>
    )
}

const RecStyled = styled.div`
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

    @media (max-width: 1300px){
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
`

const Recommendations = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;

    @media (max-width: 1300px){
        display: block;

    }
    /* min-height: 50vh; */
`

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
        margin-bottom: 1rem;
        text-align: center;
    }
    p {
        text-align: center;
        font-style: italic;
    }

    @media (max-width: 1300px){
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
        margin: 1rem auto 1rem auto;
        .description {
            margin-left: 0;
        }
        p, h4 {
            text-align: center;
        }
    }
`

const Recommendation = ({author, image, text}) => {
    return (<RecStyle>
        <img src={image} alt="student" />
        <div className="description">
            <h4>{author}</h4>
            <p>{text}</p>
        </div>
    </RecStyle>
    )
}

export default RecommendationSection;