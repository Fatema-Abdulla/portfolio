import "../App.css"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="footer-container">
        <Grid size={{ xs: 7 }} className="footer-text">
          <h2 className="my-copyright">Designed & Developed by Fatema Abdulla</h2>
        </Grid>
        <Grid size={{ xs: 4 }} className="footer-text-right">
          <Link to="https://github.com/Fatema-Abdulla" target="_blank"><FaGithub className="my-accounts github" /></Link>
          <Link to="https://www.linkedin.com/in/fatema-abdulla-bh" target="_blank"><FaLinkedin className="my-accounts"/></Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
