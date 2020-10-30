/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Form from './Form'
import { MaterialWrapper } from '../../utils/MaterialWrapper'

export default {
    title: 'common/componets/Form',
    component: Form,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <MaterialWrapper Component={<Form {...args} />} />

export const ColumnOneTextField = Template.bind({})
ColumnOneTextField.args = {
    inputBlur: (x) => console.log(x),
    userInputArray: [
        {
            label: 'User Name',
            stateKey: 'userName',
        },
    ],
}

export const ColumnThreeTextFields = Template.bind({})
ColumnThreeTextFields.args = {
    inputBlur: (x) => console.log(x),
    userInputArray: [
        {
            label: 'User Name',
            stateKey: 'userName',
        },
        {
            label: 'Password',
            stateKey: 'password',
            type: 'password',
        },
        {
            label: 'Email',
            stateKey: 'email',
        },
    ],
}

export const RowOneTextField = Template.bind({})
RowOneTextField.args = {
    inputBlur: (x) => console.log(x),
    orientation: 'row',
    userInputArray: [
        {
            label: 'User Name',
            stateKey: 'userName',
        },
    ],
}

export const RowThreeTextFields = Template.bind({})
RowThreeTextFields.args = {
    inputBlur: (x) => console.log(x),
    orientation: 'row',
    userInputArray: [
        {
            label: 'User Name',
            stateKey: 'userName',
        },
        {
            label: 'Password',
            stateKey: 'password',
            type: 'password',
        },
        {
            label: 'Email',
            stateKey: 'email',
        },
    ],
}
