import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled.div`
    display: flex;
    justify-content: flex-start;
    button {
        margin-right: 2rem;
    }
    @media (max-width: 1300px) {
        display: block;
        margin: 0rem auto;
        button {
            margin-right: 1rem;
        }
    }

    @media (max-width: 500px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0rem;
        flex-wrap: wrap;
    }
    
`;

export const ActionBtn = styled(motion.button)`
    background-color: #eba31d;
    border: none;

    &:hover {
        background-color: #e28306;
    }
`;

export const ActionCenter = styled(Action)`
    justify-content: center;

    @media (max-width: 500px) {
    flex-wrap: wrap;
    }
`;

export const TrialBtn = styled(motion.button)`
    background-color: transparent;
    border: 3px solid white;

    &:hover {
        background-color: white;
        color: #525252;
    }
`;
export const TrialBtnDark = styled(motion.button)`
    background: transparent;
    border: 3px #525252 solid;
    color: #525252;
    white-space: nowrap;

    &:hover {
        background: #525252;
        border: 3px #525252 solid;
        color: white;
    }
`;

export const StyledSection = styled.section`
    width: 80%;
    margin: 4rem auto;
    min-height: 35vh;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 2rem;
    }

    img{
        width: 5rem;
        height: 5rem;
        margin-right: 1.4rem
    }

    @media (max-width: 1300px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 96%;
        margin: 2rem auto;
    }

    h2 {
        margin-bottom: 1rem;
    }
`;

export const Advantages = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 1300px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 96%;
    }
`;
export const Advantage = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media (max-width: 7680px) {
        margin-bottom: 1.5rem;
    }
`;

export const Line = styled.div`
    height: 0.2rem;
    width: 100%;
    background-image: linear-gradient(to right, #fff, #c2c2c2, #fff);
`;
