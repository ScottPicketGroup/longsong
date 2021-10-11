import React from "react"
import { BC3 } from "../../global-styles/typography.css"

const NextIcon = ({ disabled }) => {
  return (
    <BC3
      style={disabled ? { color: "transparent" } : { color: "gray" }}
      marginTop="md"
    >
      NEXT
    </BC3>
  )
}

export default NextIcon
