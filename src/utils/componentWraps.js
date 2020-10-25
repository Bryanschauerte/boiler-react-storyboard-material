import React from 'react'
import { MemoryRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const RouteWrapper = ({ Component, needsRoute }) => (
    <Router>{needsRoute ? <Route>{Component}</Route> : { Component }}</Router>
)

RouteWrapper.defaultProps = {
    needsRoute: false,
}

RouteWrapper.propTypes = {
    Component: PropTypes.element.isRequired,
    needsRoute: PropTypes.bool,
}

export const MemoryRouterWrapper = ({ children, initialEntries }) => (
    <Router initialEntries={initialEntries}>{children}</Router>
)

MemoryRouterWrapper.defaultProps = {
    initialEntries: ['/'],
}

MemoryRouterWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    initialEntries: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.any])),
}
