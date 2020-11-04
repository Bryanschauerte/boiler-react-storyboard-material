/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SignUpForm from './SignUpForm'
import { MaterialWrapper } from '../../../../../../common/utils/MaterialWrapper'

export default {
    title: 'Pages/Login/SignIn/Components/SignUpForm',
    component: SignUpForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <MaterialWrapper Component={<SignUpForm {...args} />} />

export const SignUpFormComponent = Template.bind({})
SignUpFormComponent.args = {
    storeFormValues: (x) => console.log(x),
}
