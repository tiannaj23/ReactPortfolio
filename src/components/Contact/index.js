import {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b18m4xg', 'template_iarhqyw', form.current, 'YOUR_P0NRLPvgc82aax1OBS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section>
      <div className="contact-container">
        <h2 className="--text-center">Contact</h2>
        <form ref={form} onSubmit={sendEmail}className="--form-control--card--flex-center --dir-column">
            <input type="text" placeholder='Name' name='user_name' required/>
            <input type="email" placeholder='Email Address' name='user_email' required/>
            <input type="text" placeholder='Subject' name='subject' required/>
            <textarea name="message" cols="30" rows="10"></textarea>
            <button className="--btn--btn-primary">Submit Message</button>
        </form>
      </div>
    </section>
  )
}
