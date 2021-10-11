import React from "react"
import { BC3 } from "../../global-styles/typography.css"

const PreviousIcon = ({ disabled }) => {
  return (
    <BC3
      style={disabled ? { color: "transparent" } : { color: "gray" }}
      marginTop="md"
    >
      PREVIOUS
    </BC3>
  )
}

export default PreviousIcon
