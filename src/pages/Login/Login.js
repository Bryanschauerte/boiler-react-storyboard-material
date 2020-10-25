import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Spreads from './Spreads/Spreads'

import './Login.scss'

const Login = ({ RedirectComponent }) => {
    const [loginStep, setSetStep] = useState('sign-in')

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>
                    {' '}
                    <div className="login-container" data-testid="login-container">
                        <Tabs
                            variant="fullWidth"
                            centered
                            value={loginStep}
                            onChange={(_, v) => setSetStep(v)}
                            aria-label="wrapped label tabs example"
                        >
                            <Tab
                                data-testid="login-container-sign-in"
                                value="sign-in"
                                label="Sign Up"
                            />
                            <Tab
                                data-testid="login-container-sign-up"
                                value="sign-up"
                                label="Login"
                            />
                            <Tab
                                data-testid="login-container-forgot"
                                value="forgot"
                                label="Forgot"
                            />
                        </Tabs>

                        <RedirectComponent push to={`${loginStep}`} />
                        <Spreads />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

Login.defaultProps = {
    RedirectComponent: Redirect,
}
Login.propTypes = {
    RedirectComponent: PropTypes.func,
}

export default Login
