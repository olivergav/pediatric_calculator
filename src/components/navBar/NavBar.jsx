import "./NavBar.css"
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <header className="navbar">
            <Link to="/"><img src="" alt=""/>HOMEPAGE </Link>
            <Link to="/login">Login </Link>
        </header>
    )
}

export default Navbar;