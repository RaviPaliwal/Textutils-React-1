import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Textarea from "./Components/Textarea";



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = (mode)=>{
    
    mode==='light'?setMode('dark'):setMode('light')
    if(mode==='light'){
      document.body.style.backgroundColor= 'grey'
    }
    else{
      document.body.style.backgroundColor= 'white'
    }  
    
  }

  return (
    <>
      <Navbar head='Text-Utils' mode= {mode} toggleMode={toggleMode}/>
      <Textarea initialtext='Your Text Tools'/>
      <Showcase linkedinurl="https://www.linkedin.com/in/ravi-paliwal-233312201" Cardname='Ravi Paliwal' Cardtext="I have created such more projects if you want to see then visit my Linkedin Profile"/>
      <Footer mode= {mode} linkedin='https://www.linkedin.com/in/ravi-paliwal-233312201'  github='https://github.com/RaviPaliwal' whatsapp='https://wa.me/+919521885078' facebook='https://www.facebook.com/ravi.paliwal.79827' />
    </>
  );
}

export default App;
