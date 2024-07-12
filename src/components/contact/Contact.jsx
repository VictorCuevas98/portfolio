import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fdlacmr",
        "template_44u72r3",
        form.current,
        "5oUl6VW7WLyo58rWt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>axte_vic@hotmail.com</h5>
            <a href="mailto:axte_vic@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+525616226208</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5616226208"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF THE CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" id="submit_btn" className="btn btn-primary">
            Send Message
          </button>
          <div id="respuesta"></div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
