import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const serviceID = process.env.YOUR_SERVICE_ID
const templateID = process.env.YOUR_TEMPLATE_ID
const key = process.env.YOUR_PUBLIC_KEY
function Contact() {
    // eslint-disable-next-line no-undef

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("serviceID", "templateID", formRef.current, {
        publicKey: "key",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let`s work to gether</motion.h1>
        <motion.div className="item" variants={variants}>
          <h4>Mail</h4>
          <p>hello@react.dev</p>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Address</h4>
          <p>123 New York</p>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Phone</h4>
          <p>+1 258 5687</p>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form  ref={formRef}  onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"/>
          <input type="email" placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
