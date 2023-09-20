import { Box, Typography } from "@mui/material"


const orderCard = ({order}) => {
  return (
    <Box>
        <Typography variant="h2"> {order.id}</Typography>
    </Box>
  )
}

export default orderCard