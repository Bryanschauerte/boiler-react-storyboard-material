import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import Forgot from './Forgot/Forgot'

const Spreads = () => {
    const { path } = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${path}/forgot`}>
                <Forgot />
            </Route>
            <Route exact path={`${path}/sign-up`}>
                <SignUp />
            </Route>
            <Route exact path={`${path}/sign-in`}>
                <SignIn />
            </Route>

            <Redirect to={`${path}/sign-in`} />
        </Switch>
    )
}

export default Spreads
