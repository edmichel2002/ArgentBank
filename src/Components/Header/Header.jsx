import {Link} from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.webp";
import "./Header.css"

function Header () {
    return (
        <div>
            <nav className="main-nav">
                <Link
                    className="main-nav-logo"
                    to="./">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                
                <Link className="main-nav-item" 
                    to="./signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
               
            </nav>
            
        </div>
    );
}

export default Header;