import React from 'react';
import styled from 'styled-components';


// components
import CourseSection from '../components/CourseSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ExpectSection from '../components/ExpectSection';
import RecommendationSection from '../components/RecommendationSection';
import EnrollSection from '../components/EnrollSection';
import ScrollTop from '../components/ScrollTop';

const OurCourse = () => {
    return(
        <CourseStyled>
            <CourseSection />
            <AdvantagesSection />
            <RecommendationSection />
            <ExpectSection />
            <EnrollSection />
            <ScrollTop />
        </CourseStyled>
    )
}

const CourseStyled = styled.div`
`

export default OurCourse;