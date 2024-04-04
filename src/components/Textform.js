import React, {useState} from 'react';


export default function Textform(props) {
  const handleUpClick=()=>{
    //console.log("Upper case was Clicked " + text);
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLoClick=()=>{
    //console.log("Lower case was Clicked " + text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    let newText=("");
    setText(newText)
  }
 
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

    const [text,setText]=useState('');//This is a hook where setText has a default value mentioned in the RHS
    //text="abchsh"; //wrong way to set text
    //setText=("abchsh"); //right way to set some value of text
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} id="textbox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#091e34':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>
    <button className='btn btn-primary mx-3' onClick={handleLoClick} >Convert to Lowercase</button>
    <button className='btn btn-primary' onClick={handleClearClick} >Clear Text</button>
    <button className='btn btn-primary mx-3' onClick={speak} >Speak</button>


    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    
    </div>
    </>
  )
}




