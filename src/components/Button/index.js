import React from "react";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, className }) => {
    return <Wrapper onClick={callback} className={className}>{text}</Wrapper>;
};

export default Button;
