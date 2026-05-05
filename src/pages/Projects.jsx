import "../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles"


import Box from "@mui/material/Box"
import projectsData from "../data/projects.json"

const BigBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 30,
  margin: 50,
  marginLeft: 120,
}))

const Projects = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="header-container">
        <Grid size={{ xs: 12, md: 7 }} className="header-text">
          <h2 className="my-name">Projects</h2>
          <h2 className="header-subtitle">Full Stack & WordPress Developer</h2>
          <h3 className="header-sentence">
            Crafting modern, responsive web applications with clean architecture
            <br />
            and UX-driven design.
          </h3>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <div className="header-image">
            <img src="/images/banner_img.png" alt="header image" />
          </div>
        </Grid>
      </Grid>
      <BigBox>
        {projectsData.map((project)=> (
      <Card sx={{ maxWidth: 340 }} key={project.id}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a src={project.githubLink}>GitHub</a></Button>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
        ))}
        </BigBox>
    </Box>
  )
}

export default Projects
