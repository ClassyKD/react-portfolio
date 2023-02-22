import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <MDBContainer fluid>
      <div>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </MDBContainer>
  );
}

export default App;
