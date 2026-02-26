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
  marginTop: "4px"
}))

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-skill-title">About Me</h2>
      <h4 className="about-paragraph">I’m an Information Systems graduate passionate about developing modern web applications that combine functionality, performance, and user-centered design. With a background in UX and hands-on experience in web technologies, I build responsive and intuitive digital solutions that prioritize both usability and clean architecture.

      I am driven, detail-oriented, and continuously learning, seeking an opportunity to contribute to a dynamic development team where I can grow as a Software Engineer and create impactful products.</h4>
    </div>
  )
}

export default AboutMe
