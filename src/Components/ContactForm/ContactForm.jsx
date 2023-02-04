import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mjvlqywj');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="contact-form">
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
    </div>
  );
}