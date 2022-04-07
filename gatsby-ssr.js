import * as React from "react"
import GlobalStyles from "./src/components/global-styles/GlobalStyles.css"
import { Typography } from "./src/components/global-styles/typography.css"
import { ChangeMonthProvider } from "./src/components/hooks/ChangeMonth"
import { ActivePageProvider } from "./src/components/hooks/ActivePage"

const App = ({ element }) => {
  return (
    <>
      {/* <GlobalStyles />
      <Typography />
      <ActivePageProvider>
        <ChangeMonthProvider>{element}</ChangeMonthProvider>
      </ActivePageProvider> */}
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
