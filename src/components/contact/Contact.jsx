import { useRef } from 'react';
import './contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};
const ServiceId = process.env.YOUR_SERVICE_ID
const TemplateID = process.env.YOUR_TEMPLATE_ID
const Publickey = process.env.YOUR_PUBLIC_KEY

console.log(process.env.YOUR_PUBLIC_KEY)
function Contact(){
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('', '', form.current, {
            publicKey: '',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
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

                <form action="" ref={formRef}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea rows={8} placeholder="Message" ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact ;