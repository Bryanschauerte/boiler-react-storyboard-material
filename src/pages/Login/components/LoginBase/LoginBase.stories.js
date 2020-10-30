/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MaterialWrapper } from '../../../../common/utils/MaterialWrapper'
import LoginBase from './LoginBase'

export default {
    title: 'Pages/Login/Components/LoginBase',
    component: LoginBase,
}

const Template = (args) => <MaterialWrapper Component={<LoginBase {...args} />} />
const Child = () => <div />

export const ElevationDefault = Template.bind({})
ElevationDefault.args = {
    child: <Child />,
}

export const ElevationOne = Template.bind({})
ElevationOne.args = {
    elevation: 1,
    child: <Child />,
}

export const ElevationThree = Template.bind({})
ElevationThree.args = {
    elevation: 3,
    child: <Child />,
}
