
import GlobalStyles from "./src/components/global-styles/GlobalStyles.css"
import { Typography } from "./src/components/global-styles/typography.css"
import { ChangeMonthProvider } from "./src/components/hooks/ChangeMonth"
import { ActivePageProvider } from "./src/components/hooks/ActivePage"
import { Helmet } from "react-helmet"
import React, {useState, useEffect} from "react"

const App = ({ element }) => {
  useEffect(() => {
 // set up and use external package as needed
//  window.externalLibrary.method()
 
   }, [])
  return (
    <>
      <Helmet>
        
            <script
              language="javascript"
              src="https://longrain.functiontracker.com/public/v4/enquirecustom.js"
            ></script>

            <script language="javascript"
              src="https://www.google.com/recaptcha/api.js"
            >
         
            </script>
            
        
        
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
