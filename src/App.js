import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import {auth} from "./firebase.js";
import { useEffect } from "react";
import { useStateValue } from "./contextApi/state/StateProvider";

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
     auth.onAuthStateChanged(authUser=>{
      if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }else{
       dispatch({
        type:"SET_USER",
        user:null
       })
      }
     })   
  },[])

  return (
    <Router>
      <div className="app">
          {/* {props.location.pathname==="/login"?null:<Header/>} */}
          <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
