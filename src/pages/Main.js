import logo from "../assets/logo.svg";
import "../styles/css/App.css";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
// import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
    return ( 
    <>
        <div className="App">
            <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <About
                nom="Yalap"
                prenom="Thomas"
                age={21}
                ville="Groslay"
            />

            <Contact
                email="thomas.yalap.pro@gmail.com"
                tel="0606060606"
            />

            <Experience
                metier="Développeur"
            />

            <Experience
                prenom="Thomas"
                nom="Yalap"
            />

            <Projects
                projet="E-commerce"
                type="Site"
                techno1="Symfony"
                techno2="MERN Stack"
            />

            <Skills
                techno1="PHP - Symfony"
                techno2="JavaScript"
                techno3="Java"
            />
            </header>
        </div>
    </>
     );
}
 
export default Main;

