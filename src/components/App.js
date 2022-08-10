import '../App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';


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

    <Navbar title="TextUtils2" about ="AboutTextUtils"/>

    <TextArea heading="Enter Your Text to analyze"/>

    </>

    
  );
}

export default App;
