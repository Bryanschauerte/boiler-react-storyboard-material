/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MaterialWrapper } from '../../../../../../common/utils/MaterialWrapper'

import Actions from './Actions'

export default {
    title: 'Pages/Login/SignIn/Components/Actions',
    component: Actions,
}

const Template = (args) => <MaterialWrapper Component={<Actions {...args} />} />

export const SignInActions = Template.bind({})
SignInActions.args = {
    createUserHandler: undefined,
    cancelHandler: undefined,
}
