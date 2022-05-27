import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        margin: 0;
        background-color: #6292e6;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    }
`

export const Master = styled.div`
    background-color: #aebfd7;
    border-radius: 10px;
    padding: 10px 15px;
`