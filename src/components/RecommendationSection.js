import React, {useState} from 'react';
import styled from 'styled-components';
import {RecommendationsState} from '../recommendations';
import {Action, ActionBtn, TrialBtn} from '../styles';

const RecommendationSection = () => {
    const [recs, setRecs] = useState(RecommendationsState);

    return(

        <RecStyled>
            <div className="title">
                <h2>What our students say</h2>
            </div>
            <Recommendations>
                {recs.map((rec) => (
                    <Recommendation author={rec.name} image={rec.img} text={rec.text} key={rec.img} />
                ))}
            </Recommendations>
            <Action>
                    <ActionBtn>Enroll</ActionBtn>
                    <TrialBtn>Try for free</TrialBtn>
            </Action>
        </RecStyled>
    )
}

const RecStyled = styled.div`
    width: 100%;
    padding: 3rem 2rem;
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
        margin-bottom: 2rem;
    }

    @media (max-width: 1300px){
        padding-top: 5rem;
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
            margin-left: 3rem;
        }
        p {
            text-align: left;
        }
        h4{
            text-align: left;
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