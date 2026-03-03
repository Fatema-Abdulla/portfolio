import "../App.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

import skillsData from "../data/skills.json"

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

const Skills = () => {
  return (
    <div>
      <h2 className="about-skill-title">Skills</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {skillsData.sections.map((sec) => (
            <div key={sec.key}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: sec.key === "programs" ? 0 : "26px",
                  fontSize: "1.09rem",
                  marginBottom: "5px",
                }}
              >
                ➤ {sec.title}
              </Typography>

              <BigBox>
                {skillsData.allSkills[sec.key].map((skill) => (
                  <CustomizeBox key={skill.name}>
                    <img
                      src={`/public/images/${skill.icon}`}
                      width="40"
                      alt={skill.name}
                    />
                  </CustomizeBox>
                ))}
              </BigBox>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills
