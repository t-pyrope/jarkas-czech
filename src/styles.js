import styled from 'styled-components';

export const Action = styled.div`
    display: flex;
    justify-content: flex-start;
    button:first-child {
        margin-right: 0.5rem;
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

export const ActionBtn = styled.button`
    background-color: #E65100;
    border: none;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.15);
    padding: 0.7rem 2rem;

    &:hover {
        background-color: #d84315;
    }

    &:active {
        background-color: #bf360c;
    }
`;

export const ActionCenter = styled(Action)`
    justify-content: center;

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`;

export const TrialBtn = styled.button`
    background-color: transparent;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }

    &:active {
        background-color: rgba(0,0,0,0.15);
    }
`;

export const TrialBtnDark = styled.button`
    background: transparent;
    border-bottom: 2px transparent solid;
    color: #383838;
    white-space: nowrap;

    &:hover {
        background: #e6e6e6;
    }

    &:active {
        background: #dfdfdf;
    }
`;

export const StyledSection = styled.section`
    width: 80%;
    margin: 5rem auto 6rem;
    min-height: 35vh;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 3rem;
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
        margin: 3rem auto;
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
    margin-bottom: 1.8rem;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`;

export const Line = styled.div`
    height: 0.2rem;
    width: 100%;
    background-image: linear-gradient(to right, #fff, #c2c2c2, #fff);
`;
