import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Textarea from "./Components/Textarea";

function App() {
  return (
    <>
      <Navbar head='Text-Utils'/>
      <Textarea initialtext='Your Text Tools'/>
      <Showcase linkedinurl="https://www.linkedin.com/in/ravi-paliwal-233312201" Cardname='Ravi Paliwal' Cardtext="I have created such more projects if you want to see then visit my Linkedin Profile"/>
      <Footer/>
    </>
  );
}

export default App;
