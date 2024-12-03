import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import './App.css';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled', 'success');
      // document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enabled', 'success');
      // document.title = 'Textutils - Light Mode';
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TexUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route
           path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter Your Text for Editing and Analysis"
              mode={mode}
            />
          }
        />
      </Routes>
    </Router>
    
    </>
    

    //  {/* <Navbar title="TexUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    //  <Alert alert={alert} />
    //  <TextForm
    //    showAlert={showAlert}
    //    heading="Enter the text to analyze below"
    //    mode={mode}
    //    /> */}
  




  );
}

export default App;
