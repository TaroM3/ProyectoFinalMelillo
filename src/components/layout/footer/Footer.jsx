import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Box } from "@mui/material"

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <Box sx={{padding: theme.spacing(4), height: theme.spacing(18), backgroundColor: 'secondary.main', color: 'primary.main'}}>
      Footer
    </Box>
  )
}

export default Footer