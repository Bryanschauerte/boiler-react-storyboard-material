import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import './LoginBase.scss'

function LoginBase({ elevation, children }) {
    return (
        <Paper data-testid="login-base-paper" elevation={elevation}>
            <div className="login-base-container" data-testid="login-base-container">
                {children}
            </div>
        </Paper>
    )
}

LoginBase.propTypes = {
    elevation: PropTypes.number,
    children: PropTypes.element.isRequired,
}

LoginBase.defaultProps = {
    elevation: 2,
}
export default LoginBase
