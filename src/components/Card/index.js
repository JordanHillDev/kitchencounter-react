import React from "react";
// Components
import Button from "../Button";
// Styles
import { Wrapper, TextInput } from "./Card.styles";

const Card = () => (
    <Wrapper>
        <TextInput type="email" name="email" placeholder="email" />
        <TextInput type="password" name="password" placeholder="password" />
        <Button text={'SIGN IN'}/>
    </Wrapper>
);

export default Card;
