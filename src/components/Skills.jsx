import "../App.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

// first images
import htmlImage from "../assets/html.png"
import cssImage from "../assets/css.png"
import jsImage from "../assets/java-script.png"
import phpImage from "../assets/php.png"
import sqlImage from "../assets/sql-server.png"
import pythonImage from "../assets/python.png"
// second images
import mongoImage from "../assets/MongoDB.png"
import postgreImage from "../assets/PostgreSQL.png"
// third images
import reactImage from "../assets/React.png"
import nodejsImage from "../assets/Node JS.webp"
import expressjsImage from "../assets/ExpressJS.png"
import djangoImage from "../assets/Django.webp"

const BigBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 2,
}))

const CustomizeBox = styled(Box)(() => ({
  width: 60,
  height: 60,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: 4,
  },
}))

const allSkills = {
  programs: [
    {
      name: "HTML",
      icon: htmlImage,
    },
    {
      name: "CSS",
      icon: cssImage,
    },
    {
      name: "JavaScript",
      icon: jsImage,
    },
    {
      name: "PHP(PDO)",
      icon: phpImage,
    },
    {
      name: "SQL",
      icon: sqlImage,
    },
    {
      name: "Python",
      icon: pythonImage,
    },
  ],

  databases: [
    {
      name: "MongoDB",
      icon: mongoImage,
    },
    {
      name: "PostgreSQL",
      icon: postgreImage,
    },
  ],

  frameworksLibraries: [
    {
      name: "NodeJS",
      icon: nodejsImage,
    },
    {
      name: "ExpressJS",
      icon: expressjsImage,
    },
    {
      name: "React",
      icon: reactImage,
    },
    {
      name: "Django",
      icon: djangoImage,
    }
  ],
}

const Skills = () => {
  return (
    <div>
      <h2 className="about-skill-title">Skills</h2>
      <Grid container spacing={2}>
        <Grid item sx={6} sm={4} md={3}>
          <Typography variant="h6" sx={{fontSize: "1.09rem"}}>➤ Programming Languages</Typography>
          <BigBox>
            {allSkills.programs.map((skill) => (
              <CustomizeBox key={skill.name}>
                <img src={skill.icon} width="40" alt={skill.name} />
              </CustomizeBox>
            ))}
          </BigBox>

          <Typography variant="h6" sx={{ marginTop: "22px", fontSize: "1.09rem" }}>
            ➤ Databases
          </Typography>
          <BigBox>
            {allSkills.databases.map((skill) => (
              <CustomizeBox key={skill.name}>
                <img src={skill.icon} width="40" alt={skill.name} />
              </CustomizeBox>
            ))}
          </BigBox>

          <Typography variant="h6" sx={{ marginTop: "22px", fontSize: "1.09rem" }}>
            ➤ Frameworks and Libraries
          </Typography>
          <BigBox>
            {allSkills.frameworksLibraries.map((skill) => (
              <CustomizeBox key={skill.name}>
                <img src={skill.icon} width="40" alt={skill.name} />
              </CustomizeBox>
            ))}
          </BigBox>
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills
