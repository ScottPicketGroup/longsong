import * as React from "react"
import GlobalStyles from "./src/components/global-styles/GlobalStyles.css"
import { Typography } from "./src/components/global-styles/typography.css"
import { ChangeMonthProvider } from "./src/components/hooks/ChangeMonth"
import { ActivePageProvider } from "./src/components/hooks/ActivePage"
import {
  createMemorySource,
  createHistory,
  LocationProvider
} from "@reach/router"
const App = ({ element }) => {
  let history = createHistory(window)
  
  return (
    <LocationProvider history={history}>
      <GlobalStyles />
      <Typography />
      <ActivePageProvider>
        <ChangeMonthProvider>{element}</ChangeMonthProvider>
      </ActivePageProvider>
      </LocationProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
