import "../App.css"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import { Link } from "react-scroll"

import Silk from "./Silk"

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#d6b77a",
  color: "#000",
  fontWeight: 800,
  letterSpacing: "1px",
  marginTop: "14px",

  "&:hover": {
    backgroundColor: "#c4a46a",
    color: "#000",
  },
}))

const HeaderHome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="silk-bg">
        <Silk
          speed={7}
          scale={1}
          color="#10202d"
          noiseIntensity={0.1}
          rotation={0}
        />
      </div>
      <Grid container spacing={2} className="header-container">
        <Grid size={{ xs: 12, md: 7 }} className="header-text">
          <h2 className="my-name">Hi, I'm Fatema Abdulla</h2>
          <h2 className="header-subtitle">Full Stack & WordPress Developer</h2>
          <h3 className="header-sentence">
            Crafting modern, responsive web applications with clean architecture
            <br />
            and UX-driven design.
          </h3>
          <ColorButton variant="contained">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </ColorButton>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <div className="header-image">
            <img src="/images/banner_img.png" alt="header image" />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeaderHome
