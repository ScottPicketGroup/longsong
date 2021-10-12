import * as React from "react"
import GlobalStyles from "./src/components/global-styles/GlobalStyles.css"
import { Typography } from "./src/components/global-styles/typography.css"
import { ChangeMonthProvider } from "./src/components/hooks/ChangeMonth"
const App = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ChangeMonthProvider>{element}</ChangeMonthProvider>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
