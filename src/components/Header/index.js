import React from "react";
// Assets
import logo from "../../assets/isolated-monochrome-white.svg";
import icon from "../..//assets/icon.svg";
// Styles
import { Wrapper } from "./Header.styles";

const Header = () => {
    return (
        <Wrapper>
            <img id={"icon"} src={icon} alt={"icon"} />
            <img id={"logo"} src={logo} alt={"logo"} />
        </Wrapper>
    );
};

export default Header;
