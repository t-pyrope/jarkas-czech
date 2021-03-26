import styled from 'styled-components';

export const Action = styled.div`
    display: flex;
    justify-content: flex-start;
    button {
        margin-right: 2rem;
    }
    @media (max-width: 1300px) {
        display: block;
        margin: 0rem auto 2rem;
        button {
            margin-right: 1rem;
        }
    }
    
`

export const ActionBtn = styled.button`
    background-color: #eba31d;
    border: none;

    &:hover {
        background-color: #dd9716;
    }

    &:active {
        background-color: #e69807;
        outline: none;

    }
`

export const TrialBtn = styled.button`
    background: transparent;
    border: 3px white solid;

    &:hover {
        /* background-color: rgba(0,0,0,0.1); */
        border: 3px #e2e2e2 solid;
        color: #e2e2e2;
        
    }

    &:active {
        outline: none;
    }
`
export const TrialBtnDark  = styled.button`
    background: transparent;
    border: 3px #3a3a3a solid;
    color: #3a3a3a;

    &:hover {
        border: 3px #2e2e2e solid;
        color: #2e2e2e;
    }

    &:active {
        border: 3px #2b2b2b solid;
        color: #2b2b2b;
        outline: none;
    }

`

export const StyledSection = styled.div`
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
`

export const Advantages = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 1300px) {
        width: 90%;
    }
`
export const Advantage = styled.div`
    display: flex;
    margin-bottom: 3rem;
`

export const Line = styled.div`
    height: 0.2rem;
    width: 100%;
    background-image: linear-gradient(to right, #fff, #c2c2c2, #fff);
`