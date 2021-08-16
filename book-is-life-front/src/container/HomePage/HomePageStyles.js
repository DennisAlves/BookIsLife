import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const CustomHeader = styled.div`
  padding: 5px 15px 5px 10px;
  background-color: rgb(230, 230, 230);
  text-align: left;
  display: flex;
`
export const HeaderLinks = styled.div`
  margin-left: 3px;
  width: 25%;
  display: flex;
  justify-content: center;

  p:hover {
    color: #ab47bc;
  }
  
`
export const HomeLogoWraper = styled.div`
  width: 75%;
  margin-left: 5%;

  h3:hover {
    color: #ab47bc;
  }
`
export const HomeLogo = styled.div`
  cursor: pointer;
  width: 20%;
`
export const HeaderLink = styled.p`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`

export const MainDiv = styled.div`
  background-color: rgb(240, 240, 240);
  text-align: center;
  min-height: 100vh;
`

export const Footer = styled.div`
  padding: 20px;
  background-color: rgb(230, 230, 230);
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
export const BodyTitle = styled.h1`
`
export const HomePageProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 67.5vh;
`
