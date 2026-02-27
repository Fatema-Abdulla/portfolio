import "../App.css"
import imageProgramming from "../assets/Programming.png"
import imageDatabase from "../assets/DB.png"
import imageFramework_Library from "../assets/Frameworks&Libraries.png"


import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#d6b77a",
  color: "#000",
  fontWeight: 800,
  letterSpacing: "1px",
  marginTop: "4px",
}))

const Skills = () => {
  return (
    <div>
      <h2 className="about-skill-title">Skills</h2>
      <h3 className="about-paragraph">Programming Languages</h3>
      <img src={imageProgramming} alt="Programming Languages" className="programs"/>
      <h3 className="about-paragraph skill-points">Databases</h3>
      <img src={imageDatabase} alt="Databases" className="database"/>
      <h3 className="about-paragraph skill-points">Frameworks and Libraries</h3>
      <img src={imageFramework_Library} alt="Frameworks and Libraries" className="frame_library"/>
    </div>
  )
}

export default Skills
