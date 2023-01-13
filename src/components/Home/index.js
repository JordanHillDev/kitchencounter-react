import React from "react";
// Assets
import logo from "../../assets/default-monochrome.svg";
// Components
import Card from "../Card";
// Styles
import { Wrapper, Content } from "./Home.styles";

const Home = () => {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <Card />
        </Wrapper>
    );
};

export default Home;
