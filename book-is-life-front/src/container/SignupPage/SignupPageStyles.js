import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(230,230,230);
    text-align: left;
`

export const HomeLogo = styled.div`
  cursor: pointer;
  width: 75%;
  margin-left: 5%;
`

export const MainDiv = styled.div`
    background-color: rgb(240,240,240);
    text-align: center;
    min-height: 80vh;
`

export const Footer = styled.div`
    padding: 20px;
    background-color: rgb(230,230,230);
    text-align: center;
`
export const FooterLink = styled.a`
        color: transparent;
        text-decoration: none;
`
export const FooterLogo = styled.img`
    height: 35px;
    width: 40px;
    margin: 5px;
`

export const SignupWrapper = styled.div`
    width: 100%;
    height: max-content;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    padding-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
display: flex;
`
export const Wrapper = styled.div`

`
export const EditFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

