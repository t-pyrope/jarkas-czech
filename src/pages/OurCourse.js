import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CourseSection from '../components/CourseSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ExpectSection from '../components/ExpectSection';
import RecommendationSection from '../components/RecommendationSection';
import EnrollSection from '../components/EnrollSection';
import ScrollTop from '../components/ScrollTop';
import EnrollCard from '../components/EnrollCard';
import TrialCard from '../components/TrialCard';

const OurCourse = ({
  enrollActive, setEnrollActive, trialActive, setTrialActive,
}) => {
  return (
    <CourseStyled>
      {enrollActive ? <EnrollCard setEnrollActive={setEnrollActive} /> : ''}
      {trialActive ? <TrialCard setTrialActive={setTrialActive} /> : ''}
      <CourseSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
      <AdvantagesSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
      <RecommendationSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
      <ExpectSection setEnrollActive={setEnrollActive} setTrialActive={setTrialActive} />
      <EnrollSection />
      <ScrollTop />
    </CourseStyled>
  );
};

OurCourse.propTypes = {
  enrollActive: PropTypes.bool.isRequired,
  trialActive: PropTypes.bool.isRequired,
  setEnrollActive: PropTypes.func.isRequired,
  setTrialActive: PropTypes.func.isRequired,
};

const CourseStyled = styled.div`
`;

export default OurCourse;
