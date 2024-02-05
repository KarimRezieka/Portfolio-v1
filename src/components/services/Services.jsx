import "./services.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}
function Services() {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer">
        <p>
          I focus on helping you brand grow
          <br /> and move forward 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="container">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="container">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b>Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer"variants={variants}>
      <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", button: { backgroundColor: "black" } }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ea, enim eligendi quidem voluptate, pariatur nisi dolorum aut soluta
            cum obcaecati odio nam est quis ipsum
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", button: { backgroundColor: "black" } }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ea, enim eligendi quidem voluptate, pariatur nisi dolorum aut soluta
            cum obcaecati odio nam est quis ipsum
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", button: { backgroundColor: "black" } }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ea, enim eligendi quidem voluptate, pariatur nisi dolorum aut soluta
            cum obcaecati odio nam est quis ipsum
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", button: { backgroundColor: "black" } }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ea, enim eligendi quidem voluptate, pariatur nisi dolorum aut soluta
            cum obcaecati odio nam est quis ipsum
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
