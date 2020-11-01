import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import './Actions.scss'
import Typography from '@material-ui/core/Typography'

const Actions = ({ forgotHandler, signInHandler }) => (
    <div className="actions-container" data-testid="actions-container">
        <Button onClick={signInHandler} variant="contained" color="primary">
            Sign In
        </Button>
        <Typography
            onClick={forgotHandler}
            align="center"
            className="actions-forgot-password"
            variant="caption"
            gutterBottom
        >
            Forgot My Password
        </Typography>
    </div>
)

Actions.defaultProps = {
    forgotHandler: console.log,
    signInHandler: console.log,
}
Actions.propTypes = {
    forgotHandler: PropTypes.func,
    signInHandler: PropTypes.func,
}

export default Actions
