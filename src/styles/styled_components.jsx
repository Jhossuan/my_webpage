import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { FaBars } from 'react-icons/fa'

//Globales
export const GlobalStyle = createGlobalStyle`
    section{
    color:white;
    padding:15vh 10vw;
        @media screen and (max-width: 890px){
            padding: 15vh 7vw;
        }
    }
    ::-webkit-scrollbar{
    width:10px;
}
::-webkit-scrollbar-track{
    background:#111111;
}
::-webkit-scrollbar-thumb{
    background:#12928c;
    :hover{
        background: #15fff3;
    }
}
    .logo{
        height:100%;
        display:flex;
        align-items:center;
        position:absolute;
        left:10vw;
        text-transform:uppercase;
        z-index:999;
        p{
            font-weight:500;
            letter-spacing: 5px;
            color: #2DFFF5;
            font-size:25px;
        }
        .logo_icon{
            color: #2DFFF5
        }
        @media screen and (max-width: 890px){
            left:7vw;
        }
    }
    .text__home{
        font-size:6.5vw;
        font-weight: 700;
        text-transform:uppercase;
        text-align:center;
        text-shadow: 10px 10px 10px black;
        width:100vw;
        @media screen and (max-width: 890px) {
            font-size:12vw;
            width:75vw;
        }
    }
    .text__hola{
        font-size:20px;
        font-weight: 700;
        position:absolute;
        top:34vh;
        right:15vw;
        color: #03d9ff;
        text-decoration: none;
        width:11rem;
        letter-spacing:3px;
        text-align:center;
        text-transform:uppercase;
        /* transform: rotate(18deg); */
        z-index:998;
        @media screen and (max-width: 890px) {
            top:30vh;
            right:5vw;
            font-size:17px;
        }
    }
    .logo__tech{
        color:#fff6;
        font-size:45px;
        @media screen and (max-width: 890px) {
            font-size:30px;
        }
    }
`

//Navbar

export const ContainerNav = styled.nav`
    position: fixed;
    height: 5rem;
    background: linear-gradient(to top, transparent, #000);
    width:100vw;
    color: #fff;
    z-index:999;
    @media screen and (max-width: 890px){
        display:flex;
        justify-content:space-between;
    }
`

export const BurgerBtn = styled(FaBars)`
  z-index:999;
  font-size:30px;
  color: #2dfff5;
  margin:25px 0 0 85vw;
  cursor:pointer;
  transition:all 0.2s;
  &.activeBtn {
    transform: rotate(-90deg);
  }
  @media screen and (min-width: 890px) {
    display: none;
  }
`

export const Panel = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:100%;
    width:75vw;
    float:right;
    padding:0 10vw;
        @media screen and (max-width: 890px){
            flex-direction: column;
            background: #0009;
            color:#F2F2F2;
            position: fixed;
            backdrop-filter: blur( 2px );
            top: 0;
            left: 0;
            right:0;
            bottom:0;
            width:100vw;
            height:100vh;
            transition: transform 0.3s ease;
            z-index:998;
            transform: translate(100%, 0);
            &.active{
                transform: translate(0, 0);
            }
        }
`

export const Rutas = styled.a`
    color:#fff;
    text-transform:uppercase;
    text-decoration:none;
    font-size:20px;
    &:hover{
        color:#2DFFF5;
        font-weight:500
    }
    @media screen and (max-width: 890px){
        height:100%;
        width:100vw;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-bottom:1px solid #333333;
        &:hover{
            background: #000000;
            color: #ffffff;
        }
    }
`

export const RutaHome = styled.a`
    color:#fff;
    text-transform:uppercase;
    text-decoration:none;
    font-size:20px;
    &:hover{
        color:#1875ff;
        font-weight:500
    }
`

export const BtnDownloadCV = styled.a`
  @media screen and (max-width: 890px){
    display:none;
  }
  display: flex;
  justify-content:center;
  text-decoration:none;
  border-radius: 7px;
  border: none;
  background: #1875FF;
  color: white;
  font-family: inherit;
  text-align: center;
  font-size: 14px;
  text-transform:uppercase;
  width: 12em;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;
  vertical-align: middle;
  align-items:center;
  span {
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:center;
  position: relative;
  transition: 0.4s;
    &:after {
    content:'MY CV';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
    }
  }
  &:hover span {
  padding-right: 3.55em;
  }
  &:hover span:after {
  opacity: 4;
  right: 0;
}
`;

//Home

export const Button = styled.a`
    padding:12px 15px;
    background:#1875FF;
    border:2px solid transparent;
    background:${props => props.bg_color};
    color:#fff;
    color:${props => props.txt_color};
    border-radius:8px;
    text-decoration:none;
    font-weight:600;
    transition:0.2s;
    cursor:pointer;
    text-transform:uppercase;
    &:hover{
        background:transparent;
        border:2px solid #fff;
        color:#fff;
        background:${props => props.bg_color_hover};
        border:2px solid ${props => props.border_hover};
        color:${props => props.txt_color_hover}
    }
`

//Para los iconos del home
export const DivFlex = styled.div`
    width:50vw;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    display:grid;
    gap:1rem;
    margin-top:30px;
    grid-template-columns:repeat(
        auto-fit,
        minmax(
            50px,
            1fr
            )
    );
    @media screen and (max-width: 890px){
        width:auto;
    }
`