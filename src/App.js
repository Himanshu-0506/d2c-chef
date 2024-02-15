import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero-section";
import Navbar from "./components/navbar";
import CountdownForm from "./components/timerForm";
import Card from "./components/whywe";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Card />
      <CountdownForm/>

      <Footer />
    </div>
  );
}

export default App;
