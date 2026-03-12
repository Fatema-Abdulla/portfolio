import "./App.css"
import projects from "./data/projects.json"
import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* <div className="food-container">
        {
          projects.map((project) => (
            <Food project={project} key={project.id}/>
          ))
        }
      </div> */}
      < Footer />
    </div>
  )
}

export default App
