import 'animate.css/animate.css'
import * as React    from 'react'
import StoreProvider from 'redux/storeProvider'
import 'styles/index.scss'


/**
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapRootElement wrapRootElement
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/ Gatsby Server Rendering APIs
 * @param children
 * @returns {JSX.Element}
 */
export const wrapRootElement = ({ element }) => <StoreProvider element={element}/>