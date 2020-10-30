import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Form from '../../../../common/components/Form/Form'
import Header from '../../components/Header/Header'

import './SignIn.scss'

const SignIn = () => {
    const [formValues, setForm] = useState({})

    return (
        <div className="sign-in-container" data-testid="sign-in-container">
            <Header title="Sign in" />
            <Form
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
                    },
                ]}
            />
            {console.log(formValues, 'submit')}
            <Button variant="contained" color="primary">
                Sign In
            </Button>
            <Button variant="contained" color="secondary">
                Sign Up
            </Button>
        </div>
    )
}

export default SignIn
