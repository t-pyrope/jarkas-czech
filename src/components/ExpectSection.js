import React from 'react';
import styled from 'styled-components';
import {StyledSection, Action, ActionBtn, Advantages, Advantage, TrialBtnDark} from '../styles';
import medal from '../img/medal.png';
const ExpectSection = () => {
    return(
        <ExpectStyled>
            <h2>What can I expect from my enrolment?</h2>
            <Advantages>
                <Advantage>
                    <img src={medal} alt="medal" />
                    <div className="description">
                        <h4>Immediate access to every of 13 courses</h4>
                        <p>You can start practising your pronunciation immediately after enrolling and choose the most interesting one for you from a variety of courses.</p>
                    </div>
                </Advantage>
                <Advantage>
                    <img src={medal} alt="medal" />
                    <div className="description">
                        <h4>Live coaching</h4>
                        <p>Got stuck and don't know where to move next? Our coachers will help you to find the best solution</p>
                    </div>
                </Advantage>
                <Advantage>
                    <img src={medal} alt="medal" />
                    <div className="description">
                        <h4>Private facebook group</h4>
                        <p>You will get access to the facebook group for students of our course, moderated by our coachers, where you will be able to ask questions, communicate, share your progress</p>
                    </div>
                </Advantage>
            </Advantages>
            <ActionExp>
                    <ActionBtn>Enroll</ActionBtn>
                    <TrialBtnDark>Try for free</TrialBtnDark>
                </ActionExp>
        </ExpectStyled>
    )
}

const ExpectStyled = styled(StyledSection)`
    h2 {
        text-align: center;
    }

    h4 {
        font-size: 1.2rem;
    }

`

const ActionExp = styled(Action)`
    justify-content: center;
`

export default ExpectSection;