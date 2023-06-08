import React, {useState} from 'react'




export default function Textform(props) { 
    
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper-case!","success")

        
    }
   
    
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower-case!","success")
        
    }
    
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
        

        
    }
    
    const [text,setText] = useState('Enter text here');
    // setText('newtext')
    return (
        <>
    <div className='contnainer'style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading} </h1>
      
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="Mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-warning" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        
        
    </div>
    <div className="container my -3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>You Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>

    </div>
        </>
  )
}
