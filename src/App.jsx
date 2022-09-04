import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import './styles/App.css'
import '/node_modules/primeflex/primeflex.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
