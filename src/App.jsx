//import React from 'react';
import { useSelector} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import  User from './Pages/User/User';
import SignIn from './Pages/SignIn/SignIn';



function App() {
  const userToken = useSelector((state) => state.auth.token);
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Home />} />
          <Route path="/user" element={userToken ? <User /> : <SignIn /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;

