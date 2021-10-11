import React from 'react';
import styled from 'styled-components';
import italo from '../img/team-italo.jpg';
import jarka from '../img/team-jarka.jpg';
import olenka from '../img/team-olenka.jpg';
import ScrollTop from '../components/ScrollTop';

const OurTeam = () => {
  return (
    <TeamStyled role="main">
      <h2>Our Team</h2>
      <Cards>
        <Card>
          <img src={jarka} alt="Jaroslava Vrbova" />
          <div className="card">
            <h4>Jaroslava Vrbová</h4>
            <p>
              Haven&#39;t we met before?
              The founder of this course
              and mother of two wonderful children.
              Likes to travel around the world
            </p>
          </div>
        </Card>
        <Card>
          <img src={italo} alt="Rinaldo Endrizzi" />
          <div className="card">
            <h4>Rinaldo Endrizzi</h4>
            <p>
              Two years ago fell in love
              with Prague at first side.
              Speaks excellent Czech.
              Want to check it?
              Join our course!
            </p>
          </div>
        </Card>
        <Card>
          <img src={olenka} alt="Maryna Lis" />
          <div className="card">
            <h4>Maryna Lis</h4>
            <p>
              One of the main and
              favorite teachers of our course.
              Also likes photography and modern dance.
            </p>
          </div>
        </Card>
      </Cards>
      <ScrollTop />
    </TeamStyled>
  );
};

const TeamStyled = styled.main`
    width: 90%;
    margin: 1rem auto;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
`;
const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-bottom: 2rem;
`;

const Card = styled.article`
    position: relative;
    overflow: hidden;

    img {
        width: 288px;
        height: 384px;
        background-color: #ebebeb;
    }

    &:hover > Description {
        opacity: 1;
    }

    .card {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 3px;
        background: rgba(0,0,0,0.5);
        color: white;
        padding: 1.5rem 1rem;
        opacity: 0;
        transition: all 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h4 {
            margin-bottom: 0.8rem;
            font-size: 1.5rem;
            transform: translateY(2rem);
            transition: all 0.4s ease;
        }

        p{
            text-align: center;
            line-height: 2rem;
            font-size: 1.2rem;
            transform: translateY(2rem);
            transition: all 0.4s ease;
        }
    }

    &:hover > .card {
        opacity: 1;
        h4, p {
            transform: translateY(0rem);
        }
    }
`;

export default OurTeam;
