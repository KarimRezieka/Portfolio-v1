import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return <div>
    <section id="HomePage"><Navbar/>
    <Hero/>
    </section>
    <section>Hero</section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio2</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
