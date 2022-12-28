// import logo from './logo.svg';
import React from 'react';
import './Stylesheet/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage';
// import Header from './Components/Header';
import Signup from './Components/Signup';
// import Sell from './Components/Sell';
import Upload from './Components/Sell';
import Amaan from './Components/Amaan';
function App() {
  return (
    <Router className="App">
    <Routes>

      {/* <Route path ="/" element={<Amaan/>}></Route> */}
      <Route path ="/" element={<HomePage/>}></Route>
      <Route path='/sell-product' element={<Upload/>}></Route>
      <Route path="/user-signup" element={<Signup />}></Route>
    </Routes>  
    </Router>
  );
}

export default App;
