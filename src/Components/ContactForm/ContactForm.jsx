import { useForm, ValidationError } from '@formspree/react';
import { GoLocation } from "react-icons/go";
import { FaMedium } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './contactForm.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mjvlqywj');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="contact-form" id='contact-form_bottom'>
      <h1> Describe your project needs:</h1>
    <form method="POST" onSubmit={handleSubmit} className="form_format">
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
    <div className='social'>
        <h2>Contact Information</h2>
        <div>
          <p><GoLocation /> Guatemala, Guatemala City, Central America</p>
          <div className='sNetworks'>
            <a href='https://medium.com/@fluna1973'> <FaMedium /></a>
            <a href='https://twitter.com/flunavgt'><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/federico-luna-gt/'><FaLinkedin /></a>
            <a href='https://github.com/Flunavgt'><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}