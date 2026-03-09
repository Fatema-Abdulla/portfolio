import "../App.css"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"

const steps = [
  {
    title: "E-commerce Website Designer",
    company: "Space Tap",
    date: "Jul 2024 - Aug 2024",
    description:
      "Completed a university internship using WordPress. Designed website pages and added products while improving skills in content management and responsive design.",
  },
  {
    title: "Software Engineering Bootcamp",
    company: "General Assembly",
    date: "Aug 2025 - Nov 2025",
    description:
      "Completed a 12-week full-time Full-Stack Web Development program, building real-world applications using Python, JavaScript, SQL, Node.js, Express.js, and React.",
  },
  {
    title: "OSS/BSS Support Specialist",
    company: "Microlink Solutions W.L.L",
    date: "Jan 2026 - Present",
    description:
      "Monitor and resolve application issues, track system and database performance, manage user accounts, and collaborate with the team to ensure smooth operations.",
  },
]

// from AI: Chatgpt
const CircleIcon = () => {
  return (
    <div
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#10202d",
        marginTop: 4,
      }}
    />
  )
}

const WorkExperinces = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work Experiences</h2>

      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={-1}
          alternativeLabel
          sx={{
            "& .MuiStep-root": {
              px: 2,
            },
          }}
        >
          {steps.map((step) => (
            <Step key={step.title}>
              <StepLabel StepIconComponent={CircleIcon}>
                <div>
                  <div className="step-titles">{step.title}</div>
                  <div className="step-companies">{step.company}</div>
                  <div className="step-dates">{step.date}</div>
                  <div className="step-descriptions">{step.description}</div>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  )
}

export default WorkExperinces
