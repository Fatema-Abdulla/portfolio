import "./App.css"
import projects from "./data/projects.json"
import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div className="food-container">
        {
          projects.map((project) => (
            <Food project={project} key={project.id}/>
          ))
        }
      </div> */}
    </div>
  )
}

export default App
