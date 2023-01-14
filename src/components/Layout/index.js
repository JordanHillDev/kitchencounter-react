import React from "react";
// Components
import Header from "../Header";
// Styles
import { Wrapper, Content } from "./Layout.styles";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                <Header />
                {children}
            </Content>
        </Wrapper>
    );
};

export default Layout;
