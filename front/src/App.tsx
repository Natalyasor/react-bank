import React from "react";
import WellcomePage from "./container/WellcomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./container/SignUpPage";
import SignInPage from "./container/SignInPage";




function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index Component={WellcomePage}/>
    <Route path="/SignUpPage" Component={SignUpPage} />
    <Route path="/SignInPage" Component={SignInPage} />
   </Routes>
   </BrowserRouter>

  

     
   
  );
  
}

export default App;
