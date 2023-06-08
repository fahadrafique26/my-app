import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React,{ useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[mode1,setMode1]=useState('light'); 
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);


  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title="TextUtis-Z Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title="TextUtis-Z Light Mode";
    }

  }
  const toggleModeRED = ()=> {
    if(mode1==='light'){
      setMode1('red');
      document.body.style.backgroundColor='red';
      showAlert("Red Mode Has Been Enabled","success");
      document.title="TextUtis-Z Red Mode";

    }
    else{
      setMode1('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title="TextUtis-Z Light Mode";
    }
  }
  
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils-Z" mode={mode} toggleMode={toggleMode} mode1={mode1} toggleModeRED={toggleModeRED} /> 
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
            <Route exact path="/about"element={<About/>}></Route>

      </Routes>
      <Routes>
             <Route exact path="/"element={<Textform showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} /> }></Route>
      </Routes>       
              
             
      </div>
    </BrowserRouter>
       
    {/* <About/> */}
    
    </>  
    
  );
}


export default App;
