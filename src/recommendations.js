import daniel from './img/rev-daniel.jpg';
import aziza from './img/rev-aziza.jpg';
import jimmy from './img/rev-jimmy.jpg';

const RecommendationsState = () => {
  return [
    {
      name: 'Daniel, medical student',
      img: daniel,
      text: "Thanks for the Jarka's Czech, I'm not afraid of speaking Czech during my classes. This course allowed me to get fully engaged in my practice as well!",
    },
    {
      name: 'Aziza, HR specialist in a travel company',
      img: aziza,
      text: 'I communicate with a lot of native Czech speakers throughout the day and recently have noticed a huge difference in communicating with them after work on my pronunciation, all thanks to Jarka!',
    },
    {
      name: 'Jimmy, musician',
      img: jimmy,
      text: 'For me, speaking fluently in Czech is like being an artist more than ever, and I am glad I can be a part of this journey with Jarka.',
    },
  ];
};

export default RecommendationsState;
