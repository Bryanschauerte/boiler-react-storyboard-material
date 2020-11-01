import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Spreads from './Spreads/Spreads'
import LoginBase from './components/LoginBase/LoginBase'
import './Login.scss'

const Login = ({ RedirectComponent }) => {
    const [loginStep, setSetStep] = useState('sign-in')

    return (
        <LoginBase>
            <Grid data-testid="login-container" container spacing={3}>
                <Grid item xs={12}>
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
                            label="Sign In"
                        />
                        <Tab
                            data-testid="login-container-sign-up"
                            value="sign-up"
                            label="Sign Up"
                        />
                        <Tab data-testid="login-container-forgot" value="forgot" label="Forgot" />
                    </Tabs>

                    <RedirectComponent push to={`${loginStep}`} />
                    <Spreads />
                </Grid>
            </Grid>
        </LoginBase>
    )
}

Login.defaultProps = {
    RedirectComponent: Redirect,
}
Login.propTypes = {
    RedirectComponent: PropTypes.func,
}

export default Login
