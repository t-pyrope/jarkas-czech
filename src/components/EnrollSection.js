import React from 'react';
import styled from 'styled-components';
import {ActionBtn, TrialBtnDark} from '../styles';
import {btnAnimation} from '../animation';

const EnrollSection = () => {
    return(
        <Enroll>
            <h2>Enroll to Jarka's Czech courses</h2>
            <Cards>
            <Card className="card">
                <div className="card-header">
                    <p>Pay monthly</p>
                </div>
                <div className="card-body">
                    <h3><span className="price">$9</span><span className="per"> per month</span></h3>
                    <div className="line"></div>
                    <ul>
                        <li> Instant access to all of 13 courses (new added frequently)</li>
                        <li>Daily plan for training</li>
                        <li>Access to a private facebook group</li>
                        <li>Help of teachers</li>
                    </ul>

                    <ActionBtn variants={btnAnimation} initial="hidden" whileTap="tap">Enroll</ActionBtn>

                </div>
            </Card>
            <Card>
                <div className="card-header">
                    <p>Try for free</p>
                </div>
                <div className="card-body">
                    <h3><span className="price">$0</span><span className="per"> for 3 days</span></h3>
                    <div className="line"></div>
                    <ul>
                        <li> Access to all of 13 courses for 3 days (new added frequently)</li>
                        <li>Daily plan for training</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                    </ul>
                    <TrialBtnDark variants={btnAnimation} initial="hidden" whileTap="tap">Try for free</TrialBtnDark>
                    </div>
                </Card>
            </Cards>
        </Enroll>
    )
}

const Enroll = styled.div`
    /* width: 90%; */
    padding: 2rem 2rem 5rem;
    h2 {
        text-align: center;
        margin: 2.5rem;
        /* color: white; */
    }
    background: linear-gradient(to right,#c5a4dd,#a085b3);

    @media (max-width: 1300px) {
        padding-bottom: 2rem;
    }

    @media (max-width: 500px){
        padding: 1.5rem 0rem 1rem;
    }
`
const Cards = styled.div`
display: flex;
justify-content: center;

@media (max-width: 1300px){
    display: block;
}
`
const Card = styled.div`
display: flex;
flex-direction: column;
border-radius: 0.5rem;
overflow: hidden;
background-color: white;
box-shadow: 1px 0px 10px #5c5c5c;;
width: 30%;
margin: 0rem 2rem;

@media (max-width: 1300px){
    width: 80%;
    margin: 1rem auto 3rem;
}

.card-header {
    background-color: #2c2c4b;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: white;
    }
}

.card-body {
    padding: 1.5rem;
    ul {
        margin: 2rem 0rem;
    }
    li {
        margin-bottom: 1rem;
    }
    .line {
        width: 100%;
        height: 0.2rem;
        background-color: #808080;
    }
}

h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.price {
    font-size: 6rem;
}

.per {
    margin-top: 1rem;
    margin-left: 0.3rem;
}
`;
export default EnrollSection;