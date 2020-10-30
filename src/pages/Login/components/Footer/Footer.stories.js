/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MaterialWrapper } from '../../../../common/utils/MaterialWrapper'
import Footer from './Footer'

export default {
    title: 'Pages/Login/Components/Footer',
    component: Footer,
}

const Template = (args) => <MaterialWrapper Component={<Footer {...args} />} />

export const FooterWithTitle = Template.bind({})
FooterWithTitle.args = {
    title: 'Welcome to place',
}

export const FooterWithTitleAndSubTitle = Template.bind({})
FooterWithTitleAndSubTitle.args = {
    title: 'Welcome to place',
    subTitle: 'to sign in and do stuff',
}
