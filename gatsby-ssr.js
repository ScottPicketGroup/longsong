
import GlobalStyles from "./src/components/global-styles/GlobalStyles.css"
import { Typography } from "./src/components/global-styles/typography.css"
import { ChangeMonthProvider } from "./src/components/hooks/ChangeMonth"
import { ActivePageProvider } from "./src/components/hooks/ActivePage"

import React, {useState, useEffect} from "react"
import { Helmet } from "react-helmet"

const App = ({ element }) => {
  useEffect(() => {
 // set up and use external package as needed
console.log(window.ftenquireinit(665, "longrain"))
   }, [])
  return (
    <>
      <Helmet>
        
         
      <script
              language="javascript"
              src="https://longrain.functiontracker.com/public/v4/enquirecustom.js"
            ></script>
        
      </Helmet>
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
