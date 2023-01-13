import styled from "styled-components";

export const Wrapper = styled.button`
    color: var(--accent-color);
    background-color: var(--primary-color);
    border: 2px solid var(--accent-color);
    padding: 0.75em 2em;
    border-radius: 2em;
    text-transform: uppercase;
    text-align: center;
    transition: 0.3s;
    font-weight: bold;
    font-family: var(--font-regular);

    :hover {
        color: var(--primary-color);
        background-color: var(--accent-color);
    }
`;
