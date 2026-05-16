import "../App.css"
import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const steps = [
  {
    id: 1,
    title: "IT Specialist",
    company: "Microlink Solutions W.L.L",
    date: "Jan 2026 - Present",
    description: [
      "Completed a university internship using WordPress.",
      "Designed multiple website pages for a client.",
      "Added and managed products on a client website.",
      "Built a CRUD web application using PHP and managed databases on a web hosting server.",
      "Learned the basics of Flutter and developed a mobile application.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    company: "General Assembly",
    date: "Aug 2025 - Nov 2025",
    description: [
      "Completed a university internship using WordPress.",
      "Designed multiple website pages for a client.",
      "Added and managed products on a client website.",
      "Built a CRUD web application using PHP and managed databases on a web hosting server.",
      "Learned the basics of Flutter and developed a mobile application.",
    ],
  },
  {
    id: 3,
    title: "Designer and Developer Internship",
    company: "Space Tap",
    date: "Jul 2024 - Aug 2024",
    description: [
      "Completed a university internship using WordPress.",
      "Designed multiple website pages for a client.",
      "Added and managed products on a client website.",
      "Built a CRUD web application using PHP and managed databases on a web hosting server.",
      "Learned the basics of Flutter and developed a mobile application.",
    ],
  },
]

// from AI: Chatgpt
const CircleIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 38,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: "#10202d",
          position: "relative",
        }}
      />
      <div className="line"></div>
    </div>
  )
}

const WorkExperinces = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work Experiences</h2>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container direction="column" spacing={2}>
          {steps.map((step) => (
            <React.Fragment key={step.id}>
              <Grid size={{ xs: 12, md: 1 }} sx={{ position: "relative" }}>
                <CircleIcon />
              </Grid>

              <Grid size={{ xs: 12, md: 11 }}>
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    width: "100%",
                    maxWidth: 660,
                    boxShadow: "none",
                    marginLeft: 2,
                  }}
                >
                  <CardContent>
                    <div className="step-titles">{step.title}</div>
                    <div className="step-companies">{step.company}</div>
                    <div className="step-dates">{step.date}</div>

                    <ul className="step-descriptions">
                      {step.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default WorkExperinces
