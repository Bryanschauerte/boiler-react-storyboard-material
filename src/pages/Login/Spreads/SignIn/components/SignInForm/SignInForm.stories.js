/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SignInForm from './SignInForm'
import { MaterialWrapper } from '../../../../../../common/utils/MaterialWrapper'

export default {
    title: 'Pages/Login/SignIn/Components/SignInForm',
    component: SignInForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <MaterialWrapper Component={<SignInForm {...args} />} />

export const SignInFormComponent = Template.bind({})
SignInFormComponent.args = {
    storeFormValues: (x) => console.log(x),
}
