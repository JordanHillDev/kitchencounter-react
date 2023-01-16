import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
// Components
import Button from "../Button";
// Styles
import { Wrapper, TextInput } from "./Card.styles";

const Card = ({ cardDisplayed, setCardDisplayed }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signUp } = useAuth();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Calls `signUp` function from the context
        const { error } = await signUp({ email, password });

        if (error) {
            alert("error signing in");
        } else {
            // Redirect user to Dashboard
            navigate("/");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Calls `signIn` function from the context
        const { error } = await signIn({ email, password });

        if (error) {
            alert("error signing in");
        } else {
            // Redirect user to Dashboard
            navigate("/");
        }
    };

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
            <form
                onSubmit={
                    cardDisplayed === "login" ? handleLogin : handleSignUp
                }
            >
                <TextInput id="email" type="email" ref={emailRef} />
                <TextInput id="password" type="password" ref={passwordRef} />
                <Button text={"Submit"} className={"submit"} />
            </form>
        </Wrapper>
    );
};

export default Card;
