import {useEffect} from "react"
import { Link } from "react-router-dom"

function Nav(props) {

    return <nav>
        <Link to="/React-Portfolio/" 
            onClick={()=>{props.setActive("about")}}
            className={props.active==="about" ? "active" : ""}>About Me</Link>
        <Link to="/React-Portfolio/portfolio" 
            onClick={()=>{props.setActive("portfolio")}}
            className={props.active==="portfolio" ? "active" : ""}>Portfolio</Link>
        <Link to="/React-Portfolio/contact"
            onClick={()=>{props.setActive("contact")}}
            className={props.active==="contact" ? "active" : ""}>Contact Me</Link>
        <Link to="/React-Portfolio/resume"
            onClick={()=>{props.setActive("resume")}}
            className={props.active==="resume" ? "active" : ""}>Resume</Link>
    </nav>
}

export default Nav;