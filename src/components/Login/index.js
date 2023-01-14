import React, { useState } from "react";
// Assets
import logo from "../../assets/default-monochrome.svg";
// Components
import Card from "../Card";
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./Login.styles";

const Login = () => {
    const [cardDisplayed, setCardDisplayed] = useState(null);

    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <Content>
                {cardDisplayed && (
                    <Card
                        cardDisplayed={cardDisplayed}
                        setCardDisplayed={setCardDisplayed}
                    />
                )}
            </Content>

            {!cardDisplayed && (
                <div className="btnContainer">
                    <Button
                        text={"LOG IN"}
                        callback={() => setCardDisplayed("login")}
                    />
                    <Button
                        text={"SIGN UP"}
                        className={"secondary"}
                        callback={() => setCardDisplayed("signup")}
                    />
                </div>
            )}
        </Wrapper>
    );
};

export default Login;
