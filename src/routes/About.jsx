import { useNavigate } from "react-router-dom"
import { Button } from "../styles/styled_components"

const About = () => {

  const navigate = useNavigate()

  return (
    <section className='min-h-screen' id="about">
      <div className="mb-5 text-center">
        <p className="text-principal">Learn more...</p>
        <h1 className="text-100 uppercase">About Me</h1>
      </div>

      <div className="grid">
        <div className="md:col-6 col-12 flex justify-content-center align-items-center">
          <img src="https://media4.giphy.com/media/JyxdzuAaxZnPH7TyRd/giphy.gif?cid=ecf05e47g9m8gkbhehjr84z9vaifo6x8mjduyvdkl5g5rvg9&rid=giphy.gif&ct=g" alt="programmer" />
        </div>
        <div className="md:col-6 col-12 flex flex-column">
          <p className="text-xl">
          Hi, I'm Jhossuan. Frontend web developer with more than 16 weeks of work experience, my main tasks are the layout of web sites and applications, consumption and management of API REST, optimization and maintenance of other web applications and much more.
          </p>
          <Button className="w-4 text-center mt-2" href='#projects'>See Projects</Button>
        </div>
      </div>
    </section>
  )
}

export default About