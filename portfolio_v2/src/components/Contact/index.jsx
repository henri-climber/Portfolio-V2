import React, { useState } from 'react';
import "./index.scss";
import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
    const emailAddress = 'henri.breuer@outlook.de';
    const linkedIn = "https://linkedin.com/in/henri-breuer";

    const handleLinkedInClick = (event) => {
        window.open(linkedIn, '_blank');
      };


    // contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      // You can access the form values using the state variables (name, email, message)
    };

    return (
    <div className="contact-page" id='contact'>
        <h2>Contact</h2>

        <div className="row">
            <div className="contact-text">
                <p>You are looking to hire a highly motivated software engineer intern or know a place where I would be a great fit? You have a project in mind or simply want to say hi? Don’t hestitate to contact me, I am looking forward to connecting with you!</p>

                <div className="contact-links">
                    <MdMail size={48} color="#1CB2E6"/>
                    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </div>
                <div className="contact-links">
                <FaLinkedin size={48} color="#1CB2E6"/>
                    <button className="text-button" onClick={handleLinkedInClick}>{linkedIn}</button>
                </div>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <input
                        placeholder='Name'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>

                    <div className="form-group">
                    <input
                        placeholder='Email'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <div className="form-group">
                    <textarea
                        placeholder='Message'
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </div>

                    <button type="submit">Send <RiSendPlaneFill size={32} /></button>
                </form>
            </div>
        </div>
    </div>
    );

}

export default Contact;