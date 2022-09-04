import { useState } from "react"
import { ContainerNav, Panel, Rutas, BtnDownloadCV, BurgerBtn, RutaHome } from '../styles/styled_components'
import { FaLaptopCode } from 'react-icons/fa'
import CV from '../assets/cvfront.pdf'

const NavBar = () => {

    const [active, setActive] = useState(true)
    const [activeLink, setActiveLink] = useState(true)
  
    const toggleBtn = () =>{
      setActive(!active)
    }

    const ActiveLink = () =>{
        setActive(true)
    }
  
    return (
      <>
        <ContainerNav>
            <RutaHome onClick={()=> setActive(true)} className="logo" href="#"><p>Jhossuan</p><span><FaLaptopCode className="logo_icon" /></span></RutaHome>
            <BurgerBtn onClick={toggleBtn} className={active ? '' : 'activeBtn'}/>
            <Panel className={active ? '' : 'active'}>
                <Rutas onClick={ActiveLink} href="#about">About</Rutas>
                <Rutas onClick={ActiveLink} href="#projects">Projects</Rutas>
                <Rutas onClick={ActiveLink} href="#contact">Contact</Rutas>
                <BtnDownloadCV className="button__cv" href={CV} download>
                  <span>Download</span>
                </BtnDownloadCV>
            </Panel>
        </ContainerNav>
      </>
    );
  }
  
  export default NavBar


