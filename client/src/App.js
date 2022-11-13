import "./App.css";
import NavBar from "./components/nav-bar";
// import Students from "./components/students";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "./components/loading";
import {Route, Routes, Router, Link} from 'react-router-dom';
import Profile from "./components/profile";
import Items from "./components/tabs/clothingitems";
import Cart from "./components/tabs/cart.js"
import Footer from "./components/parts/footer.js"
import Home from "./components/tabs/home.js"
import Checkout from "./components/tabs/checkout.js";


function App() {


  const { isLoading } = useAuth0();
  const {user} = useAuth0();
  console.log(user);
 
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">

        <NavBar />
        {/* <div>
          {!user ? "": }
        </div> */}
        <div className="container flex-grow-1">
            {!user ? <a>"Welcome ! " </a>  : <span> Welcome Back <Link to="api/me">{user.nickname}</Link> </span>}
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/api/me" element ={<Profile user={user}/>} />
              <Route path="/clothing" element={<Items />} />
              <Route path="/cart" element={<Checkout />} />
            </Routes>
            
        </div>

      <Footer />
    </div>
  );
}

export default App;
