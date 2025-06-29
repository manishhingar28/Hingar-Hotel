import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./components/About";
import Acomodation from "./components/Acomodation";
import Services from "./components/Services";
import Reviews from "./components/Memorable";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import HotelDetails from "./pages/HotelDetails";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Admin from "./pages/Admin";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation" element={<Acomodation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/hotel/:id" element={<HotelDetails />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
