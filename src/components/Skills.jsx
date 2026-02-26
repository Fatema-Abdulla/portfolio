import "../App.css"
import image from "../assets/banner_img.png"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
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
      <h3 className="header-sentence">
        Full Stack & WordPress Developer
        <br />
        Crafting modern, responsive web applications with clean architecture
      </h3>
    </div>
  )
}

export default Skills
