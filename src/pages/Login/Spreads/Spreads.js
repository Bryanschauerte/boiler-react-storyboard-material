import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Forgot from './Forgot'

const Spreads = () => {
    const { path } = useRouteMatch()

    return (
        <Switch>
            <Route path={`${path}/forgot`}>
                <Forgot />
            </Route>
            <Route path={`${path}/sign-up`}>
                <SignUp />
            </Route>
            <Route path={`${path}/sign-in`}>
                <SignIn />
            </Route>

            <Redirect to={`${path}/sign-in`} />
        </Switch>
    )
}

export default Spreads
