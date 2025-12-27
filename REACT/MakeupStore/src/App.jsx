import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";



function App(){
  let a = 5;
  let b = 10;
  console.log(a+b);

  return (
    <>
      <BrowserRouter>
        <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}


export default App;