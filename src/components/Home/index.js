import React, {useState} from "react";
// Assets
import logo from "../../assets/default-monochrome.svg";
// Components
import Card from "../Card";
import Button from "../Button";
// Styles
import { Wrapper } from "./Home.styles";

const Home = () => {
    const [cardDisplayed, setCardDisplayed] = useState(null)

    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            {cardDisplayed === 'signin' && <Card cardDisplayed={cardDisplayed} setCardDisplayed={setCardDisplayed}/>}
            <div className='btnContainer'>
                <Button text={'LOGIN'} callback={() => setCardDisplayed('signin')}/>
                <Button text={'SIGN UP'} className={'secondary'} callback={() => setCardDisplayed('signin')}/>
            </div>
            
        </Wrapper>
    );
};

export default Home;
