import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 1.5rem;
    max-width: 400px;
    background-color: var(--primary-light-color);
    border-radius: 1rem;

    .titleBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-weight: 400;
        margin: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
    }

    .submit {
        margin-top: 30px;
    }
`;

export const TextInput = styled.input`
    margin-bottom: 10px;
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    width: 300px;
    font-size: 16px;
    box-shadow: 2px 2px 4px 2px rgb(168, 165, 165);
    -webkit-appearance: none; /* allows box-shadow to show on iOS */

    :focus {
        outline: 2px solid var(--primary-color);
    }
`;
