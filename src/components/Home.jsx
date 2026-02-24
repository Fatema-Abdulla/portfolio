import "../App.css"
import Header from "./Header"
import AboutMe from "./AboutMe"
import Skills from "./Skills"

import Box from "@mui/material/Box"
import Grid from "@mui/material/GridLegacy"

const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }} className="about-skill">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <AboutMe />
          </Grid>
          <Grid item xs={6}>
            <Skills />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home
