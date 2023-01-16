import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
// Contexts
import { AuthProvider } from "./contexts/Auth";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Login from "./components/Login";
import BaseRouter from "./components/BaseRouter";

// Context
// import { supabase } from "./supabaseClient";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.session().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <Router>
            {/* {!session ? <Login /> : <BaseRouter key={session.user.id} session={session} />} */}
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route exact path="/" element={<BaseRouter />} />
                </Routes>
            </AuthProvider>
            <GlobalStyle />
        </Router>
    );
};

export default App;
