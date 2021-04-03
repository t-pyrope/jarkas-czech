import React, {useState} from 'react';
import styled from 'styled-components';
import {Line, ActionBtn} from '../styles';
// social media images
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import youtube from '../img/youtube.png';

import ScrollTop from '../components/ScrollTop';


const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [senderName, setSenderName] = useState("");
    const [messageText, setMessageText] = useState("");
    const [fullMessage, setFullMessage] = useState({name: null, email: null, text: null});

    const inputHandler = (e) => {
        switch(e.target.name){
            case "name":
                setSenderName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "message":
                setMessageText(e.target.value)
                break;
            default:
                return null;
        }
    }

    const clearInputs = () => {
        setSenderName("");
        setEmail("");
        setMessageText("");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFullMessage({...fullMessage, name: senderName, email: email, text: messageText});
        clearInputs();
    }

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
            <form id="contact-form" onSubmit={(e) => submitHandler(e)}>
                <div className="name">
                    <label htmlFor="name">
                        <input type="text" placeholder="Name" name="name" id="name_input" value={senderName} onChange={inputHandler} required/>
                    </label>
                </div>
                <div className="email">
                    <label htmlFor="email">
                        <input type="email" placeholder="Email" name="email" id="email_input" value={email} onChange={inputHandler} required />
                    </label>
                </div>
                <div className="message">
                    <textarea name="message" placeholder="Your message" id="message_input" cols="30" rows="5" value={messageText} onChange={inputHandler} required></textarea>
                </div>
                <div className="submit">
                    <ActionBtn type="submit">Send Message</ActionBtn>
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

    @media (max-width: 500px){
        display: block;
        padding: 0rem;
        text-align: center;
    }

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
    border: solid 3px #5f5d5c;
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
        border-bottom: solid 2px #5f5d5c;
        color: #5f5d5c;
        margin: 0rem 1rem 1rem 0rem;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        transition: all 0.5s ease;
    }

    input[type='text']:focus, [type='email']:focus, textarea:focus {
        outline: none;
        background-color: #f7f4f3;
        border-bottom: solid 2px #474443;
    }
`

export default ContactUs