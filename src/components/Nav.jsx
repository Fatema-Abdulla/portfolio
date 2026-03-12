import "../App.css"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="footer-container">
        <Grid size={{ xs: 7, md: 7 }} className="nav-left">
          <img src="/newlogo.png" alt="logo" className="nav-logo" />
          <h4 className="nav-name">Fatema Abdulla</h4>
        </Grid>
        <Grid size={{ xs: 5, md: 5 }} className="nav-center">
          <NavLink to="/" className="nav-link home-link">Home</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Nav
