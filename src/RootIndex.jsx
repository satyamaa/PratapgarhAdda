import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About"
const RootIndex = () => {
  return (
    <Routes>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
  )
}

export default RootIndex
