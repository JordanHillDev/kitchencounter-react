import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Login from "./components/Login";
import Layout from "./components/Layout";
import Main from "./components/Main";
import BaseRouter from "./components/BaseRouter";

// Context
// import { supabase } from "./supabaseClient";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            
        </Routes>
        <BaseRouter />
        <GlobalStyle />
    </Router>
);

export default App;
