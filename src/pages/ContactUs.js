import React from 'react';
import styled from 'styled-components';
import {Line} from '../styles';
// social media images
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import youtube from '../img/youtube.png';

import ScrollTop from '../components/ScrollTop';


const ContactUs = () => {
    return(
        <ContactStyled>
            <h2>Contacts</h2>
            <Columns>
                <Info>
                <div className="social">
                    <h4>Follow us on social media!</h4>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                </div>
                <Line />
                <div className="address">
                    <p>Jarka's Czech</p>
                    <p>Václavské náměstí, </p>
                    <p>110 00 Nové Město</p>
                    <p>+420 123 456 789</p>
                    <p>service@jarkasczech.cz</p>
                </div>
            </Info>
            <Form>
            <form method="post" id="contact-form">
                <div className="name">
                    <label for="name">
                        <input type="text" placeholder="name" name="name" id="name_input" required/>
                    </label>
                </div>
                <div className="email">
                    <label for="email">
                        <input type="email" placeholder="email" name="email" id="email_input" required />
                    </label>
                </div>
                <div className="message">
                    <textarea name="message" placeholder="Your message" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div className="submit">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </Form>
        </Columns>
        <ScrollTop />
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    width: 90%;
    min-height: 90vh;
    margin: 0rem auto;

    h2 {
        text-align: center;
        margin-top: 2rem;
    }
`

const Columns = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0rem 0rem;

`

const Info = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 1.4rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 1rem 1rem 0rem 0rem;
    }
`

const Form = styled.div`
    border: solid 3px #474544;
    position: relative;

    form {
        padding: 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    input[type='text'], [type='email'], select, textarea {
	background: none;
    border: none;
	border-bottom: solid 2px #474544;
	color: #474544;
	margin: 0rem 1rem 1rem 0rem;
	padding: 0rem 0.5rem 0.5rem 0rem;
    text-transform: uppercase;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
}

input[type='text']:focus, [type='email']:focus, textarea:focus {
	outline: none;
	padding: 0 0 0.875em 0;
}

    button {
        background-color: orange;
    }

`

export default ContactUs