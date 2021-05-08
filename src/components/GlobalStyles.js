import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1300px) {
            h1 {
                    font-size: 1.5rem;
            }
        }
    }

    body{
        font-family: 'Lato', sans-serif;
        color: #252525;
    }

    h1 {
        font-family: 'Rozha One', serif;;
        font-size: 1.7rem;
    }

    button {
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        padding: 0.7rem 2rem;
        border: none;
        font-size: 1rem;
        color: white;
        font-weight: 900;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        transition-property: background-color, color;
        border-radius: 0.4rem;

        &:focus, &:active {
            outline: none;
        }
        @media (max-width: 500px){
            padding: 0.7rem 1.7rem;
        }

        @media (max-width: 360px){
            margin-bottom: 0.5rem;
        }

    }

    a {
        text-decoration: none;
        color: white;
    }

    h2 {
        font-size: 3rem;
        color: #313131;

        @media (max-width: 1300px){
            font-size: 2.6rem;
        }
        @media (max-width: 600px) {
            font-size: 2.5rem;
        }

        @media (max-width: 320px){
            font-size: 2rem;
        }
    }

    h4 {
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
    }

    ul {
        list-style: none;
    }
`;
export default GlobalStyles;
