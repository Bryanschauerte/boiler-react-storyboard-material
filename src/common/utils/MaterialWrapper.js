import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import PropTypes from 'prop-types'
import theme from '../../dependencies/theme/Theme'

export const MaterialWrapper = ({ Component }) => (
    <ThemeProvider theme={theme}>
        <div>{Component}</div>
    </ThemeProvider>
)
MaterialWrapper.propTypes = {
    Component: PropTypes.element.isRequired,
}
