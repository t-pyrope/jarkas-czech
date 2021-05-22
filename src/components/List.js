import React from 'react';
import PropTypes from 'prop-types';
import { Advantages, Advantage } from '../styles';
import thumbsUp from '../img/thumbs-up.png';
import medal from '../img/medal.png';

const List = ({ icon, objArr }) => {
  const iconHandler = (i) => {
    switch (i) {
      case 'medal':
        return medal;
      case 'thumbsUp':
        return thumbsUp;
      default:
        return thumbsUp;
    }
  };
  return (
    <Advantages>
      {objArr.map((obj) => (
        <Advantage key={obj.header}>
          <img src={iconHandler(icon)} alt="" />
          <div className="description">
            <h4>{obj.header}</h4>
            <p>{obj.text}</p>
          </div>
        </Advantage>
      ))}
    </Advantages>
  );
};

List.propTypes = {
  icon: PropTypes.string.isRequired,
  objArr: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
