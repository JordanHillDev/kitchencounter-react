import React from "react";
// Components
import Button from "../Button";
// Styles
import { Wrapper, TextInput } from "./Card.styles";

const Card = ({ cardDisplayed, setCardDisplayed }) => (
    <Wrapper>
        <div className="titleBar">
            <h1>{cardDisplayed === "login" ? "Log In" : "Sign Up"}</h1>
            <Button
                className={"close"}
                text={"X"}
                callback={() => setCardDisplayed(null)}
            />
        </div>
        <form>
            <TextInput type="email" name="email" placeholder="email" />
            <TextInput type="password" name="password" placeholder="password" />
            {cardDisplayed === "signup" && (
                <TextInput
                    type="password"
                    name="password"
                    placeholder=" confirm password"
                />
            )}
            <Button text={"Submit"} className={"submit"} />
        </form>
    </Wrapper>
);

export default Card;
