import React, { useState, useRef  } from 'react';
import "./index.scss";
import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

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
    const [formStatus, setFormStatus] = useState('default'); // default, error, success, invalid

  
    const form = useRef();

    const validateForm = () => {
        // Basic form validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          return false;
        }
        return true;
      };

    const sendEmail = (e) => {
      e.preventDefault();

      if (!validateForm()) {
        setFormStatus('invalid');
        return;
      }
  
      emailjs.sendForm('service_8vfuqum', 'template_y33n23m', form.current, 'aV39t1bZS3Zyj11si')
        .then((result) => {
            console.log('success');
            setFormStatus('success');
            setEmail('');
            setName('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
            setFormStatus('error');
        });
        e.target.reset();
        
    };

    return (
    <div className="contact-page" id='contact'>
        <h3>Contact</h3>

        <div className="row">
            <div className="contact-text">
                <p>You are looking to hire a highly motivated software developer intern or know a place where I would be a great fit? You have a project in mind or simply want to say hi? Do not hestitate to contact me, I am looking forward to connecting with you!</p>

                <div className="contact-links">
                    <MdMail className='mailIcon' size={48} color="#1CB2E6"/>
                    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </div>
                <div className="contact-links">
                <FaLinkedin className='linkedinIcon' size={48} color="#1CB2E6" style={{ width: '48px', height: '48px' }} />
                    <button className="text-button" onClick={handleLinkedInClick}>{linkedIn}</button>
                </div>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name='user_name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="name">Name</label>
                    </div>

                    <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name='user_email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email">E-Mail</label>
                    </div>

                    <div className="form-group">
                    <textarea
                        id="message"
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <label for="message">Message</label>
                    </div>

                    <div>
                        {formStatus === 'error' && <p className="error">Something went wrong. Please try again.</p>}
                    </div>

                    <div>
                        {formStatus === 'invalid' && <p className="invalid">Please fill out all fields correctly.</p>}
                    </div>

                    <div>
                        {formStatus === 'success' && <p className="success">E-Mail sent successfully.</p>}
                    </div>

                    <button type="submit">Send <RiSendPlaneFill size={32} /></button>
                </form>
            </div>
        </div>
    </div>
    );

}

export default Contact;