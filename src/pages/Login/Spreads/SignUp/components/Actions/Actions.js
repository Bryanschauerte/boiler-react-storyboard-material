import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import './Actions.scss'

const Actions = ({ cancelHandler, createUserHandler }) => (
    <div className="sign-up-actions-container" data-testid="sign-up-actions-container">
        <Button
            data-testid="sign-up-actions-cancel"
            onClick={cancelHandler}
            variant="outlined"
            color="primary"
        >
            Cancel
        </Button>
        <Button
            data-testid="sign-up-actions-confirm"
            onClick={createUserHandler}
            variant="contained"
            color="primary"
        >
            Sign Up
        </Button>
    </div>
)

Actions.propTypes = {
    cancelHandler: PropTypes.func.isRequired,
    createUserHandler: PropTypes.func.isRequired,
}

export default Actions
