import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // Colors
        --primary-color: hsl(275, 61%, 32%);
        --primary-opaque-color: hsla(275, 61%, 32%, 0.5);
        --primary-light-color: hsl(276, 29%, 80%);
        --accent-color: hsl(43, 100%, 49%);
        --black-color: #3b3b3b;
        // Fonts
        --font-regular: "Roboto", sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-regular);
        color: var(--primary-color);
        margin: 0;
        background-color: var(--primary-color);
    }
    
`;
