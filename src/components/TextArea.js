import React, {useState} from 'react';

export default function TextArea(props){



    const handleUpClick = () => {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleLowClick = () => {
        console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const handleOnChange = (e) => {
        console.log("Click to uppercase");
        setText(e.target.value);
    }

    

    const [text, setText] = useState("Enter Your Text Here");
    
    
  

    return (

        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value= {text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

                <br></br>
                <button className="btn btn-outline-primary my-2 mx-2" onClick={handleUpClick}>Convert Uppercase</button>
                <button className="btn btn-outline-secondary my-2 mx-2" onClick={handleLowClick}>Convert Lowercase</button>

            </div>


        <div className="container">

            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
               <p> {text} </p>
        </div>

        </>
    );
}