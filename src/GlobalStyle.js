import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Arial', sans-serif;
        box-sizing: border-box;
        
    }

    body {
        margin: 0px;
        width: calc(100vw - (100vw - 100%));
    }
`

export default GlobalStyle
