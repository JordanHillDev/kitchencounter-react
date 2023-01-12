import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
// Context
import { supabase } from "./supabaseClient";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element = {<Home />} />
        </Routes>
        <GlobalStyle/>
    </Router>
);

export default App;
