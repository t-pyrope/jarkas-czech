import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <p>&copy; Jarka&#39;s Czech</p>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
    background-color: #756580;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export default Footer;
