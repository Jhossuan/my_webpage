import { useNavigate } from "react-router-dom"
import { Button } from "../styles/styled_components"
import { DiReact } from 'react-icons/di'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiMedal } from 'react-icons/bi'

const About = () => {

  const navigate = useNavigate()

  return (
    <section id="about">
      <div className="mb-5 text-center">
        <p className="text-principal">Learn more</p>
        <h1 className="text-100 uppercase">About Me</h1>
      </div>

      <div className="grid">
        <div className="lg:col-6 col-12">
          <img className="flex ml-auto mr-auto" src="https://media4.giphy.com/media/JyxdzuAaxZnPH7TyRd/giphy.gif?cid=ecf05e47g9m8gkbhehjr84z9vaifo6x8mjduyvdkl5g5rvg9&rid=giphy.gif&ct=g" alt="programmer" />
        </div>
        <div className="lg:col-6 col-12 flex flex-column">
          <div className="grid mb-3">
            <div className="lg:col-4 col p-2 text-center">
              <div style={{background:'#fff4', borderRadius:'5px'}} className='p-3 h-full flex flex-column justify-content-center align-items-center'>
                <DiReact className="text-2xl mb-2" />
              <h3 className="text-principal">Experience</h3>
              <small>+10 months of study</small>
              <small>+3 working months</small>
              </div>
            </div>
            <div className="lg:col-4 col p-2 text-center">
              <div style={{background:'#fff4', borderRadius:'5px'}} className='p-3 h-full flex flex-column justify-content-center align-items-center'>
              <VscFolderLibrary className="text-2xl mb-2" />
              <h3 className="text-principal">Projects</h3>
              <small>+11 personal projects</small>
              <small>+4 real work projects</small>
              </div>
            </div>
            <div className="lg:col-4 col-12 p-2 text-center">
              <div style={{background:'#fff4', borderRadius:'5px'}} className='p-3 h-full flex flex-column justify-content-center align-items-center'>
              <BiMedal className="text-2xl mb-2" />
                <h3 className="text-principal">Skills</h3>
                <small>Self-taught and researcher</small>
              </div>
            </div>
          </div>
          <p className="text-xl">
          Hi, <span className="text-principal">I'm Jhossuan.</span> Frontend web developer with more than 16 weeks of work experience, my main tasks are the layout of web sites and applications,consumption and management of <span className="text-principal">API REST,</span>  optimization and maintenance of other web applications and much more.
          </p>
          <Button className="lg:w-5 md:w-5 sm:w-4 w-7 text-center mt-3" href='#projects'>See Projects</Button>
        </div>
      </div>
    </section>
  )
}

export default About