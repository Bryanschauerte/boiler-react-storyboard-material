/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import TextField from './TextField'
import { MaterialWrapper } from '../../utils/MaterialWrapper'

export default {
    title: 'common/componets/TextField',
    component: TextField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <MaterialWrapper Component={<TextField {...args} />} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Username',
    className: '',
    color: 'primary',
    onClick: undefined,
}

export const NotEditable = Template.bind({})
NotEditable.args = {
    icon: {},
    label: 'Username',
    className: '',

    editable: false,
    color: 'primary',
    onClick: undefined,
}
