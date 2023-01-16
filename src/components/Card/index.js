import React, { useState, useRef } from "react";
import { supabase } from "../../supabaseClient";
// Components
import Button from "../Button";
// Styles
import { Wrapper, TextInput } from "./Card.styles";

const Card = ({ cardDisplayed, setCardDisplayed }) => {
    const [helperText, setHelperText] = useState({ error: null, text: null });
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        console.log(email);
        const password = passwordRef.current?.value;

        const { user, error } =
            cardDisplayed === "login"
                ? await supabase.auth.signIn({ email, password })
                : await supabase.auth.signUp({ email, password });

        if (error) {
            setHelperText({ error: true, text: error.message });
        } else if (!user && !error) {
            setHelperText({
                error: false,
                text: "An email has been sent to you for verification!",
            });
        }
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     const email = emailRef.current?.value;
    //     const password = passwordRef.current?.value;

    //     const { user, error } = await supabase.auth.signIn({ email, password });

    //     if (error) {
    //         setHelperText({ error: true, text: error.message });
    //     } else if (!user && !error) {
    //         setHelperText({
    //             error: false,
    //             text: "An email has been sent to you for verification!",
    //         });
    //     }
    // };

    return (
        <Wrapper>
            <div className="titleBar">
                <h1>{cardDisplayed === "login" ? "Log In" : "Sign Up"}</h1>
                <Button
                    className={"close"}
                    text={"X"}
                    callback={() => setCardDisplayed(null)}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <TextInput id="email" type="email" ref={emailRef} required />
                <TextInput
                    id="password"
                    type="password"
                    ref={passwordRef}
                    required
                />
                <Button text={"Submit"} className={"submit"} />
            </form>
        </Wrapper>
    );
};

export default Card;
