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
  marginTop: "14px",

  "&:hover": {
    backgroundColor: "#c4a46a",
    color: "#000"
  }

}))

const Header = () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="header-container">
            <Grid item xs={8} className="header-text">
              <h2 className="my-name">Hi, I'm Fatema Abdulla</h2>
              <h3 className="header-sentence">
                Full Stack & WordPress Developer
                <br />
                Crafting modern, responsive web applications with clean
                architecture
                <br />
                and UX-driven design.
              </h3>
              <ColorButton variant="contained">Contact Me</ColorButton>
            </Grid>
            <Grid item xs={4}>
              <div className="header-image">
                <img src={image} alt="header image" />
              </div>
            </Grid>
          </Grid>
        </Box>
  )
}

export default Header
