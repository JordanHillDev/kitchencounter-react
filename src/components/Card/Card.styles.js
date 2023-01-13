import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 1.5rem ;
    max-width: 400px;
    background-color: var(--primary-light-color);
    border-radius: 1rem;
`;

export const TextInput = styled.input`
    margin-bottom: 10px;
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    width: 300px;
    box-shadow: 2px 2px 4px 2px rgb(168, 165, 165);
    -webkit-appearance: none; /* allows box-shadow to show on iOS */

    :focus {
        outline: 2px solid var(--primary-color);
    }
`;
