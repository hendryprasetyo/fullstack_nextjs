import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import contactStyles from "./Contact.module.css";
import Link from "next/link";

const Contact = () => {
  const [notif, setNotif] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_95y5v8q",
      "template_cjxl5g3",
      form.current,
      "fTploNM37ebA9FSUJ"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="container pt-24">
      <h5 className="text-center font-medium">Get In Touch</h5>
      <h2 className="text-center mb-12 font-medium">Contact Me</h2>

      <div className={(contactStyles.contact__container, "container")}>
        <div className={contactStyles.contact__options}>
          <article className={contactStyles.contact__option}>
            <MdOutlineEmail className={contactStyles.contact__option_icon} />
            <h4 className="font-medium">Email</h4>
            <h5 className="font-medium">hendryprras@gmail.com</h5>
            <Link
              className={contactStyles.link}
              href="mailto:hendryprras@gmail.com"
            >
              Send a message
            </Link>
          </article>
          <article className={contactStyles.contact__option}>
            <RiMessengerLine className={contactStyles.contact__option_icon} />
            <h4>Massenger</h4>
            <h5>hendryprras</h5>
            <Link
              className={contactStyles.link}
              href="https://m.me/ernest.achiever"
            >
              Send a message
            </Link>
          </article>
          <article className={contactStyles.contact__option}>
            <RiWhatsappLine className={contactStyles.contact__option_icon} />
            <h4>WhatsApp</h4>
            <h5>+6288809773289</h5>
            <Link
              href="https://api.whatsapp.com/send?phone=+6288809773289"
              className={contactStyles.link}
            >
              Send a message
            </Link>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className={(contactStyles.form, "mt-5")}
        >
          <input
            className={contactStyles.input}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className={contactStyles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={contactStyles.textarea}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary hover:bg-transparent hover:border-2 hover:border-[var(--color-primary)] mt-1"
            onClick={() => setNotif(true)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
