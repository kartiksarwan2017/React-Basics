import '../App.css';
import About from './About';
import Navbar from './Navbar';
import TextArea from './TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";


// const Name = "Thor";

// function nameFormat(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: "Himanshu",
//   lastName: "Sharma"
// }

function App() {
  return (

    <>
    {/* <hr></hr>
    <h2> Hello {nameFormat(user)}, How are You? </h2>
    Hello World
    <p className= "nature">Nature in broadest sense is a physical world or universe.</p> */}

    <Navbar title="TextUtils" about ="AboutTextUtils"/>


    <Router>
    <Routes>
      <Route path="/about">
         <About/>
      </Route>

      <Route path="/">
          <div className="container my-3">
              <TextArea heading="Enter Your Text to analyze"/>
          </div>
      </Route>
    </Routes>
    </Router>

    </>

    
  );
}

export default App;
