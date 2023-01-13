import React from "react";
// Components
import Button from "../Button";
// Styles
import { Wrapper, TextInput } from "./Card.styles";

const Card = ({cardDisplayed, setCardDisplayed}) => (
    <Wrapper>
        <Button className={'close'} text={'X'} callback={() => setCardDisplayed(null)}/>
        <h1>{cardDisplayed === 'signin' ? "Sign In" : null}</h1>
        <TextInput type="email" name="email" placeholder="email" />
        <TextInput type="password" name="password" placeholder="password" />
    </Wrapper>
);

export default Card;
