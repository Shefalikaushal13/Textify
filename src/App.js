import './App.css';
//import About from './components/About';
import Navbar from'./components/Navbar'
import React,{useState} from 'react';
import Textform from './components/Textform'
import Alert from './components/Alert';

function App() {
  const[mode, setMode]= useState('light'); //whether dark mode is enabled or not
  const[alert, setAlert]= useState(null); //alert is an object

  const showAlert=()=>{
    
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#091e34';
    }
  }
  return(
    <>
  <Navbar title="Textify" mode={mode} toggleMode={toggleMode}/>
  <Alert/>
  <div className="container my-3"> {/*my means margin of y axis which is equal to 3 in this case*/ }
  <Textform heading="Enter your text to analyse" mode={mode}/>
  {/*<About/>*/}
  </div>
    </>
  );
}
export default App;
