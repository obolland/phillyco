import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';



import {FormContainer, MessageSentSuccessfully} from './contact-form.styles';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject:'',
        message: '',
        formSent: false
    });
    const { email, subject, message, formSent } = formData;

//an EmailJs function to send form data to email address
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm(
            'service_x6zcmkg',
            'template_lp7w38n',
            event.target,
            'user_CeUFgLS0y9mViIM0qPkKp')
          .then((result) => {
                console.log(result.text);
                setFormData({...formData, formSent: true})
          }, (error) => {
                console.log(error.text);
                alert("There was an error sending your message. Please email info@phillyco.co.uk directly or try again")
          });

          setFormData({email: '', subject:'', message: ''});
      }
    
    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value })
    }

    
    return (
        <FormContainer>
            {   formSent
                ?   <MessageSentSuccessfully>Thanks for getting in touch, we will get back to you shortly!</MessageSentSuccessfully>
                :
            <>
            <h2>Get In Touch!</h2>
            <span>We'll get back to you as soon as possible</span>
                <form onSubmit={sendEmail}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    id='email'
                    required
                />
                <FormInput
                    name='subject'
                    type='text'
                    handleChange={handleChange}
                    value={subject}
                    label='subject'
                    id='subject'
                    required
                />
                <FormInput
                    name='message'
                    type='text'
                    handleChange={handleChange}
                    value={message}
                    label='message'
                    id='message'
                    required
                />
                <CustomButton type='submit'>SUBMIT</CustomButton>
            </form>
            </>
            }
        </FormContainer>
    )
}

export default ContactForm;