import { Box } from "@mui/material"

const Bill = ({order}) => {
  return (
    <Box>
        <h1>
            {order.id}
        </h1>
        <h2>
            {order.data.buyer.name}
        </h2>
    </Box>
  )
}

export default Bill