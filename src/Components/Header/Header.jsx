import { useEffect } from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.webp";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Reduce/authReducer';
import "./Header.css"

function Header () {
    const userToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.profil);

    useEffect(() => {
        console.log(userToken)
    })


    const handleLogout = () => {
        localStorage.removeItem('token');
        // Dispatch the logout action
        dispatch(logout());
      };



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
                <div className="middle">
                <div>
                {userToken ? (
                    // Afficher Sign Out si l'utilisateur est connecté ... 
                    <>
                    <Link to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userProfile.userName}
                    </Link>
                    <Link to="/" onClick={handleLogout} className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                    </>
                ) : (
                    // Sinon, afficher "Sign In" si l'utilisateur n'est pas connecté
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>                
                )}
                </div>
            </div>
               
            </nav>
            
        </div>
    );
}

export default Header;

//<div className="main-nav-access">
//<div className="main-nav-access-profil">{user.userName}</div>
//<div>
 // <i className="fa-solid fa-user"></i>
 // <i className="fa-solid fa-gear"></i>