import React from 'react';
import styled from 'styled-components';
import thumbsUp from '../img/thumbs-up.png'
import {Action, ActionBtn, TrialBtnDark, StyledSection, Advantages, Advantage} from '../styles';


const AdvantagesSection = () => {
    return(
        <StyledAdvantages>
            <div className="headline">
                <h2>Why would I like to apply to this course?</h2>
                <p>Pronunciation of Czech like a native speaker gives you more opportunities in your life</p>
            </div>
                <Advantages>
                    <Advantage>
                        <img src={thumbsUp} alt="thumbs up" />
                        <div className="description">
                            <h4>Good career choices</h4>
                            <p>People, who speak Czech nice and fluent, have much more opportunities on the labor-market</p>
                        </div>    
                    </Advantage>
                    <Advantage>
                        <img src={thumbsUp} alt="thumbs up" />
                        <div className="description">
                            <h4>Great first impression</h4>
                            <p>Don't wait til people get to know you, make them impressed from the first moment</p>
                        </div>
                    </Advantage>
                    <Advantage>
                        <img src={thumbsUp} alt="thumbs up" />
                        <div className="description">
                            <h4>Self-confidence improvement</h4>
                            <p>Czech pronunciation is a hard nut to crack! But you certainly can crack it — much easier with our help and 10 minutes of practice per day </p>
                        </div>
                    </Advantage>
                    <Advantage>
                        <img src={thumbsUp} alt="thumbs up" />
                        <div className="description">
                            <h4>Better studying</h4>
                            <p>Studies show, that active engagement in classroom has a positive effect for the whole process. Don't be shy of your accent anymore!</p>
                        </div>
                    </Advantage>
                </Advantages>
                <ActionAdv>
                    <ActionBtn>Enroll</ActionBtn>
                    <TrialBtnDark>Try for free</TrialBtnDark>
                </ActionAdv>
        </StyledAdvantages>
    )
}

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
`


const ActionAdv = styled(Action)`
    justify-content: center;
`

export default AdvantagesSection;