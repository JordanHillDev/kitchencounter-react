import styled from "styled-components";

export const Wrapper = styled.div`
    outline: 2px solid red;
    width: 100%;
    /* max-width: 1000px; */
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    #logo {
        width: 60vw;
        max-width: 650px;
        margin-left: auto;
        /* margin-right: 40px; */
    }

    /* #iconContainer {
        display: grid;
        place-items: center;
        padding: 1.5rem;
        /* position: absolute; */
        /* transform: translateY(50%); */
    /* } */

    #icon {
        width: 15vw;
        max-width: 70px;
        height: 15vw;
        max-height: 70px;
    } 
`;
