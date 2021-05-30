import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <small>&copy; Jarka&#39;s Czech</small>
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
