import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
