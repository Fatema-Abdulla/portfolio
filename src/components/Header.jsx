import "../App.css"
import image from "../assets/header_img.png"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const ColorButton = styled(Button)(() => ({
  backgroundColor: '#d6b77a',
  color: '#000',
  fontWeight: 800,
  letterSpacing: '1px'
}));

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
        <h2 className="my-name">Hi, I'm Fatema Abdulla</h2>
        <h3 className="header-sentence">
          Full Stack & WordPress Developer
          <br />
          Crafting modern, responsive web applications with clean architecture
          <br />
          and UX-driven design.
        </h3>
        <ColorButton  variant="contained">Contact Me</ColorButton>
      </div>
      <div className="header-image">
        <img src={image} alt="header image" />
      </div>
    </div>
  )
}

export default Header
