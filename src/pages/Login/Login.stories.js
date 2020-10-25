/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { RouteWrapper } from '../../utils/componentWraps'
import Login from './Login'

export default {
    title: 'Pages/Login',
    component: Login,
}

const Template = (args) => <RouteWrapper needsRoute Component={<Login {...args} />} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})

LoggedOut.args = {}
