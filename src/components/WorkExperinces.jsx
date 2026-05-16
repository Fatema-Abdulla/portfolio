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
    company: "Microlink Solutions",
    date: "Jan 2026 - Present",
    description: [
      "Manage and resolve app incidents, providing clear and effective communication as first-line support for customer technical issues.",
      "Analyze application logs to quickly identify and resolve user-facing issues.",
      "Troubleshoot and identify application errors to maintain optimal platform stability.",
      "Utilize SQL queries to manage and interact with the database, performing data updates and administrative tasks to support application operations.",
      "Monitor application performance metrics to ensure efficient and uninterrupted user operations.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    company: "General Assembly",
    date: "Aug 2025 - Nov 2025",
    description: [
      "Utilized Git and GitHub for managing code repositories and streamlining team collaboration.",
      "Developed full-stack web applications by deploying JavaScript, MERN/MEN stacks, and Python with Django framework.",
      "Tested and validated backend functionality using Postman and Insomnia to ensure seamless data integration.",
      "Designed and managed relational and non-relational databases using MongoDB and PostgreSQL for efficient data storage.",
      "Engaged in collaborative team projects with fellow students to build integrated software solutions.",
    ],
  },
  {
    id: 3,
    title: "Designer and Developer Internship",
    company: "Space Tap",
    date: "Jul 2024 - Aug 2024",
    description: [
      "Successfully completed a university internship, specializing in web development and content management via WordPress.",
      "Designed and customized multiple responsive website pages for clients to enhance user experience (UX).",
      "Added and managed product on a client’s website, ensuring accurate information.",
      "Developed a full CRUD website using PHP, including database management and successful deployment on a web hosting server.",
      "Gained a foundational understanding of Flutter and built a basic mobile application as a practical project.",
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
                    maxWidth: 600,
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
