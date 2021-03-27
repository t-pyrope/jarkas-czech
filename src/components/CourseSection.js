import React from 'react';
import girls from '../img/girls.jpg';
import styled from 'styled-components';
import {Action, ActionBtn, TrialBtn} from '../styles';

const CourseSection = ({setEnrollActive, setTrialActive}) => {
    return(
        <Course>
            <Welcome>
                <div className="title">
                    <h2>Do you want to </h2>
                    <h2>sound like</h2>
                    <h2>a <span>native speaker</span> in <span>Czech</span>?</h2>
                </div>
                <p>Start to work on your pronunciation today and get rid of your accent!</p>
                <Action>
                    <ActionBtn onClick={() => {setEnrollActive(true)}}>Enroll</ActionBtn>
                    <TrialBtn onClick={() => setTrialActive(true)}>Try for free</TrialBtn>
                </Action>
            </Welcome>
            <Image>
                <img src={girls} alt="girls talking" />
            </Image>
        </Course>
    )
}

const Course = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 90vh;
    align-items: center;
    background-color: #82bbd6;
    padding:  4rem 10rem;
    margin: auto;

    h2 {
        color: white;
        margin-bottom: 0.5rem;
    }
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 3rem 5rem 3rem;
        text-align: center;
    }
`

const Welcome = styled.div`
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    .title, p {
        margin-bottom: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        padding-right: 3rem;
    }
    span {
        font-weight: 900;
    }

    @media (max-width: 1300px){
        p {
            padding-right: 0rem;
        }
    }
`


const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        width: 100%;
        height: 65vh;
        object-fit: cover;
    }

    @media (max-width: 1300px) {
        img {
            height: 60vh;
        }
    }
`

export default CourseSection;