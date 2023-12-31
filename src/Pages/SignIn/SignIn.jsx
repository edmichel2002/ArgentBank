import "./SignIn.css";
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { apiCallWithAuth } from "../../Api/Apiservice"
import { setToken } from '../../Redux/Reduce/authReducer';
import { setUserProfileUser } from '../../Redux/Reduce/profilReducer';

const SignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const getUserProfil = async (token) => {
    try {
      const result = await apiCallWithAuth("POST", "user/profile", token)
      const user = result.body
      dispatch(setUserProfileUser(user))
    } catch (error) {
      console.log("Erreur dans getUserProfil : " + error)
    }
  }

  const handleSignIn = async (e) => {
    console.log('Signing in');
    e.preventDefault();
    const login = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value
    }
    try {
      const result = await apiCallWithAuth("POST", "user/login", null, login)
      const token = result.body.token
      localStorage.setItem("token", token)
      dispatch(setToken(token))
      if(token) {
        await getUserProfil(token)
      }
      navigate("/user")
    } catch (error) {
      console.log("Erreur: " + error)
    }
  };
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" defaultValue="tony@stark.com" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" defaultValue="password123" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;