import "../App.css"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="header-container">
        <Grid size={{ xs: 7 }} className="footer-text">
          <h2 className="my-copyright">© 2026 Fatema Abdulla. All rights reserved.</h2>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <h4> hi </h4>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
