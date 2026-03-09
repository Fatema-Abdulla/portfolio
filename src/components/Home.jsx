import "../App.css"
import Header from "./Header"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import WorkExperinces from "./WorkExperinces"
import Contact from "./Contact"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }} className="about-skill">
        <Grid container spacing={1}>
          <Grid size={{xs: 7}}>
            <AboutMe />
          </Grid>
          <Grid size={{xs: 4}}>
            <Skills />
          </Grid>
        </Grid>
      </Box>
      <WorkExperinces />
      <Contact />
    </div>
  )
}

export default Home
