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

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-skill-title">About Me</h2>
      <h4 className="about-paragraph">
        I am a Software Engineer and Information Systems graduate passionate
        about building modern, user-friendly web applications. With a background
        in UX design, I focus on creating intuitive and responsive digital
        experiences.<br/>After completing an intensive full-stack development
        bootcamp, I gained hands-on experience developing dynamic web
        applications and working across both frontend and backend technologies.
        I also completed a university internship in WordPress e-commerce
        development, strengthening my skills in responsive design and
        client-focused solutions.<br/>I am eager to grow within a professional
        development team and contribute to impactful digital projects.
      </h4>
    </div>
  )
}

export default AboutMe
