import * as React from 'react'
import GlobalStyles from './src/components/global-styles/GlobalStyles.css'
import { Typography } from './src/components/global-styles/typography.css';

const App = ({element}) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {element}
        </>
    )
}

export const wrapRootElement = ({ element }) => {
    return <App element={element} />
}