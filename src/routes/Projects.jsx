import { projects } from '../components/Projects'

const Projects = () => {

  return (
    <section className="min-h-screen" id="projects">
      <div className="mb-5 text-center">
        <p className="text-principal">All my</p>
        <h1 className="text-100 uppercase">Projects</h1>
      </div>
      <div className='grid'>
        {projects.map((project, index) => {
          return (
            <div className='col'>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          )
          })
        }
      </div>
    </section>
  )
}

export default Projects