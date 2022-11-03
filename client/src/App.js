import "./App.css";
import NavBar from "./components/nav-bar";
import Students from "./components/students";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "./components/loading";
import {Route, Routes, Link} from 'react-router-dom';
import Profile from "./components/profile";
import Items from "./components/tabs/clothingitems"


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
      <div className="container flex-grow-1">
          {!user ? <a>"Hello from Techtonica " </a>  : <span> Hello <Link to="api/me">{user.nickname}</Link> </span>}
          <Routes>
            <Route path="/" element ={<Students user={user}/>} />
            <Route path="/api/me" element ={<Profile user={user}/>} />
            <Route path="/clothing" element={<Items />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
