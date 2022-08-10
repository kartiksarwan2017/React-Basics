import '../Navbar.css';
import Logo from '../assets/images/social-logo.jpg';

// const name = "Thor";

function Navbar(){
    return(

        <>
        <div id="navbar-container">

            <img id="social-logo" src={Logo} alt="SocialLogo"/>

            <div id="navbar-headers">
                <ul>
                    <li>
                        <a href="/">Home</a>
                      
                    </li>
                    <li>
                        <a href="/">About Us</a>
                       
                    </li>
                    <li>
                        <a href="/">Contact</a>
                        
                    </li>
                    <li>
                        <a href="/">Sign In</a>
                        
                    </li>
                    <li>
                    <a href="/">Sign Up</a>
                        
                    </li>
                </ul>

            </div>
        </div>


        {/* <h1>Hello {name}, How are you?</h1>
        <p>This is Navbar Please Use it.</p> */}

        </>
    )
}


export default Navbar;