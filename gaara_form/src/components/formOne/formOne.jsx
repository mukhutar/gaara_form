import React, { useState , useRef } from 'react';
import leafIcon from '/Assets/leaf-icon.png';
import formFooter from '/Assets/formFooter.svg';
import './formOne.css';
import emailjs from '@emailjs/browser';

function FormOne() {
    const form = useRef();

    const [message, setMessage] = useState('');
    const[errorMessage , setError] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_no2pgwi', 'template_83hugmi', form.current, '-FqssVFpDkJ-AW6c_')
        .then((result) => {

            console.log(result.text);
            setTimeout(() => {
                setMessage('Sent')
                setError('')
            })
            form.current.reset();
        }, (error) => {
            console.log(error.text);
           setTimeout(() => {
            setError('Failed')
            setMessage('')
           },1000)
        });
    };

  return (
    <div className='form_container'>
      <div className="form_header">
        <h3>Let's Get Started</h3>
      </div>
      <div className="form_elements">
        <div className="form_content">
          <form ref={form} onSubmit={sendEmail} >
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" name="firstName" placeholder="Enter your first name"required /><br />

            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" name="lastName" placeholder="Enter your last name"  required /><br />

            <label htmlFor="email">Work Email</label><br />
            <input type="email" name="email" placeholder="Enter your email"  required /><br />

            <label htmlFor="message">Message</label><br />
            <textarea name="message" placeholder="Enter your message"  required cols="30" rows="10"></textarea><br />

            <label htmlFor="organization">Organization</label><br />
            <input type="text" name="organization" placeholder="Enter your organization"  required /><br />

            <label htmlFor="position">Position</label><br />
            <input type="text" name="position" placeholder="Enter your position"  required /><br />

            <button type='submit'>Go green</button>
          </form>
        </div>
        <div className="form_img">
          <img src={leafIcon} alt="Leaf Icon" />
        </div>
      </div>

      {message && (
        <h2 className='message'>{message}</h2>
      )}
      <div className="form_footerimg">
        <img src={formFooter} alt="Form Footer" />
      </div>
    </div>
  );
}

export default FormOne;
