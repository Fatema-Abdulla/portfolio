import { useState } from "react"
import { TextField, Button, Box, Typography, Alert } from "@mui/material"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdMzwkY-amHSGkFutMV_36LySWtxvqWJotlSt90XbR5zoTNeA/formResponse"

    const formBody = new FormData()
    formBody.append("entry.2051031244", formData.name)
    formBody.append("entry.275432559", formData.subject)
    formBody.append("entry.2007378710", formData.message)

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      })

      setSuccess(true)

      setFormData({
        name: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  return (
    <div className="contact-me">
      <h2 className="contact-title">Contact Me</h2>
      <Box sx={{ maxWidth: 600, mx: "auto"}}>
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Message sent successfully!
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
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
        />

        <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "#10202d" }}>
          Send Message
        </Button>
      </Box>
    </Box>
    </div>

  )
}

export default Contact
