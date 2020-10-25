import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login/Login'
import './Pages.scss'

const Pages = () => (
    <div className="pages-container">
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Redirect to="/login" />
            </Switch>
        </Router>
    </div>
)

export default Pages
