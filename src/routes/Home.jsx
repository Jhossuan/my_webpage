import { DivFlex } from '../styles/styled_components'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiSass } from 'react-icons/di'
import { SiTailwindcss, SiStyledcomponents, SiRedux } from 'react-icons/si'

const Home = () => {
  return (
    <section id="home" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <div>
        <h1 className="text__home">Frontend Developer</h1>
        <h4 className='text__hola'>self taught</h4>
        <DivFlex>
          <div>
            <DiHtml5 className="logo__tech" />
          </div>
          <div>
            <DiCss3 className="logo__tech" />
          </div>
          <div>
            <SiStyledcomponents className="logo__tech" />
          </div>
          <div>
            <DiSass className="logo__tech" />
          </div>
          <div>
            <SiTailwindcss className="logo__tech" />
          </div>
          <div>
            <DiJavascript1 className="logo__tech" />
          </div>
          <div>
            <DiReact className="logo__tech" />
          </div>
          <div>
            <SiRedux className="logo__tech" />
          </div>
        </DivFlex>
      </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <BsChevronDoubleDown className="arrow_down__home" />
        </div>
    </section>
  );
}

export default Home
