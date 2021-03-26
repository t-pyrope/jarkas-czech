import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1300px) {
            h2 {
                font-size: 2.6rem;
            }
            h1 {
                    font-size: 1.5rem;
            }
        }
    }

    body{
        font-family: 'Lato', sans-serif;
        /* font-size: 1rem; */
        color: #252525;
    }

    h1 {
        font-family: 'Oleo Script Swash Caps', cursive;
        font-size: 1.7rem;
    }

    button {
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        transition: color 0.4s ease;
        padding: 1rem 2rem;
        border: none;
        font-size: 1rem;
        color: white;
        font-weight: 900;
        text-transform: uppercase

    }

    a {
        text-decoration: none;
        color: white;
    }

    h2 {
        font-size: 3rem;
        color: #313131;
    }

    ul {
        list-style: none;
    }
`;
export default GlobalStyles;