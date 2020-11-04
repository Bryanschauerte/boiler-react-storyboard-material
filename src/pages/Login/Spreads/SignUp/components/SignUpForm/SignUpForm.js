/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Form from '../../../../../../common/components/Form/Form'
import './SignUpForm.scss'

function SignUpForm({ storeFormValues }) {
    const [formValues, setForm] = useState({})

    useEffect(() => {
        if (
            formValues.userName &&
            formValues.userName.length > 2 &&
            formValues.password &&
            formValues.password.length > 2 &&
            formValues.email &&
            formValues.email.length > 2
        ) {
            storeFormValues(formValues)

            // this would be a common/util/validate function normally
            // we could hand errors to the form to give user feedback messages
            return storeFormValues(formValues)
        }
    }, [formValues, storeFormValues])

    return (
        <Form
            className="sign-up-form-container"
            inputBlur={setForm}
            userInputArray={[
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
                    type: 'text',
                },
            ]}
        />
    )
}
SignUpForm.defaultProps = {
    storeFormValues: (values) => console.log(`Use this to submit to whatever api ${values}`),
}
SignUpForm.propTypes = {
    storeFormValues: PropTypes.func,
}
export default SignUpForm
