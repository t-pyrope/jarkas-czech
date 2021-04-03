import React from 'react';
import styled from 'styled-components';


// components
import CourseSection from '../components/CourseSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ExpectSection from '../components/ExpectSection';
import RecommendationSection from '../components/RecommendationSection';
import EnrollSection from '../components/EnrollSection';
import ScrollTop from '../components/ScrollTop';
import EnrollCard from '../components/EnrollCard';
import TrialCard from '../components/TrialCard';

const OurCourse = ({enrollActive, setEnrollActive, trialActive, setTrialActive}) => {
    return(
        <CourseStyled>
            {enrollActive ? <EnrollCard setEnrollActive={setEnrollActive} /> : ""}
            {trialActive ? <TrialCard setTrialActive={setTrialActive} /> : ""}
            <CourseSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
            <AdvantagesSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
            <RecommendationSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
            <ExpectSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
            <EnrollSection />
            <ScrollTop />
        </CourseStyled>
    )
}

const CourseStyled = styled.div`
`

export default OurCourse;