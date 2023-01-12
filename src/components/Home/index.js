import React from "react";
// Assets
import logo from '../../assets/default-monochrome.svg'
// Styles
import { Wrapper, Content } from "./Home.styles";

const Home = () => {

    return (
        <Wrapper>
            <img src={logo}  alt="logo"/>
            <Content>
        
            </Content>
        </Wrapper>
    )
}

export default Home;