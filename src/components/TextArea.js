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

        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value= {text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

            </div>


            <button className="btn btn-primary" onClick={handleLowClick}>Convert LowerCase</button>
            &nbsp; &nbsp;
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
        </div>
    );
}