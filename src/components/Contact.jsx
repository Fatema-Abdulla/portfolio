import { useState } from "react"
import { TextField, Button, Box, Typography, Alert } from "@mui/material"

const Contact = () => {
  const initialFormState = {
  name: "",
  email: "",
  description: "",
};

  const [formData, setFormData] = useState(initialFormState);

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleReset = () => {
    setFormData(initialFormState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdMzwkY-amHSGkFutMV_36LySWtxvqWJotlSt90XbR5zoTNeA/formResponse"

    const formBody = new FormData()
    formBody.append("entry.2051031244", formData.name)
    formBody.append("entry.275432559", formData.email)
    formBody.append("entry.2007378710", formData.description)

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      })

      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        description: "",
      })
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  return (
    <div className="contact-me">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-des">
        Please get in contact with me if you have any questions.
      </p>
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            description sent successfully!
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#10202d" }}
          >
            Send Message
          </Button>
          <Button
            type="reset"
            variant="outlined"
            onClick={handleReset}
            sx={{
              mt: 2,
              ml: 1.5,
              backgroundColor: "transparency",
              color: "#10202d",
              border: "solid 1px #10202d",
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Contact
