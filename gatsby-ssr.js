import * as React    from 'react'
import StoreProvider from 'redux/storeProvider'


export const wrapRootElement = ({ element }) => <StoreProvider element={element}/>