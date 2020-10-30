/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MaterialWrapper } from '../../../../common/utils/MaterialWrapper'
import Header from './Header'

export default {
    title: 'Pages/Login/Components/Header',
    component: Header,
}

const Template = (args) => <MaterialWrapper Component={<Header {...args} />} />

export const HeaderWithTitle = Template.bind({})
HeaderWithTitle.args = {
    title: 'Welcome to place',
}

export const HeaderWithTitleAndSubTitle = Template.bind({})
HeaderWithTitleAndSubTitle.args = {
    title: 'Welcome to place',
    subTitle: 'to sign in and do stuff',
}
