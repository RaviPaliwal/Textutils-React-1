import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Textarea from "./Components/Textarea";
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setalert]=useState(null);
  //method to set alert
  const sendAlert =(message,type)=>
  {
    setalert ({
      msg : message,
      type:type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1200);
  }
  const toggleMode = (mode)=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= 'grey'
      sendAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      sendAlert("Light Mode Enabled","success")
    }  
    
  }

  return (
    <>
      <Navbar head='Text-Utils' mode= {mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />

      <Router>
        <Routes>
        <Route path="/Textutils-React-1" element={
        <>
        <Textarea initialtext='Your Text Tools' sendAlert= {sendAlert}/>
        <Showcase linkedinurl="https://www.linkedin.com/in/ravi-paliwal-233312201" Cardname='Ravi Paliwal' Cardtext="I have created such more projects if you want to see then visit my Linkedin Profile"/>
        </>} />
        <Route path="/about" element={
          <>
          <About mode= {mode} toggleMode={toggleMode} />
          </>
        } />
        <Route path="/Textutils-React-1" element={<Textarea initialtext='Your Text Tools' sendAlert= {sendAlert}/>} />
        </Routes>
      </Router>
      
      
      <Footer mode= {mode} linkedin='https://www.linkedin.com/in/ravi-paliwal-233312201'  github='https://github.com/RaviPaliwal' whatsapp='https://wa.me/+919521885078' facebook='https://www.facebook.com/ravi.paliwal.79827' />
    </>
  );
}

export default App;
