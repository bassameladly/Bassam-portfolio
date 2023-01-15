import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1b1ow5e",
        "template_ne5fuq3",
        form.current,
        "BHOTwYoygslwWBqjk"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="contact-page-container ">
        <div className="text-zone">
          <p>
            I am interested in seeking a Junior React & React-native Front-End
            developer position in a company where my skills and experience will
            allow me the opportunity to grow and further enhance my skills, if
            you have any other requests or questions, don't hesitate to contact
            me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bassam Eladly
          <br />
          Egypt , Giza , Haram
          <br />
          <br />
          <span>bassameladly@gmail.com</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
