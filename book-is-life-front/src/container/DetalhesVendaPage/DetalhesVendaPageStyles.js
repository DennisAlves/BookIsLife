import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
export const MainDiv = styled.div`
  background-color: rgb(240, 240, 240);
  text-align: center;
  min-height: 100vh;
`
export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(230,230,230);
    text-align: left;
    display: flex;
`
export const HeaderLinks = styled.div`
    margin-left: 3px;
    width: 25%;
    display: flex;
    justify-content: center;
   
`
export const HomeLogoWraper = styled.div`
  width: 75%;
  margin-left: 5%;
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

export const Mid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 67.5vh;
`
export const StatusWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 10px;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DataWrapper = styled.div`
  align-self: center;
`
export const IdWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
export const AdressWrapper = styled.div`
  margin: 10px;

`
export const ItensWrapper = styled.div`
  margin: 10px;
`
export const ItensListWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BookWrapper = styled.div`
  margin: 10px;
`
export const PaymentsWrapper = styled.div`
  margin: 10px;
`
export const PaymentListWrapper = styled.div`
`
export const CardWrapper = styled.div`
    margin-left: 20px;
`
export const ChangeStatusWrapper = styled.div`
margin-bottom: 80px;
`
export const SelectWrapper = styled.div`
  margin: 5px;
`
export const ButtonWrapper = styled.div`
  margin: 5px;
`