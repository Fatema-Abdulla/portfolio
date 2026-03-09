import "../App.css"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import WorkExperinces from "../components/WorkExperinces"
import Contact from "../components/Contact"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }} className="about-skill">
        <Grid container spacing={1}>
          <Grid size={{ xs: 7 }}>
            <AboutMe />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Skills />
          </Grid>
        </Grid>
      </Box>
      <WorkExperinces />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default Home
