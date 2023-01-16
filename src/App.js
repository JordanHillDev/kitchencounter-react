import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
// Components
import Login from "./components/Login";
import BaseRouter from "./components/BaseRouter";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
        console.log(user)
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                const currentUser = session?.user;
                setUser(currentUser ?? null);
            }
        );

        return () => {
            authListener?.unsubscribe();
        };
    }, [user]);

    return (
        <>
            {!user ? <Login /> : <BaseRouter user={user} />}
            <GlobalStyle />
        </>
    );
};

export default App;
