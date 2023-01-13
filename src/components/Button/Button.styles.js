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

    &.secondary {
        color: var(--primary-color);
        background-color: var(--accent-color);
        border: 2px solid var(--accent-color);
    }

    &.secondary:hover {
        color: var(--accent-color);
        background-color: var(--primary-color);
    }

    &.close {
        padding: 0.5rem .75rem;
        margin-left: auto;
        border: none;
    }
`;
