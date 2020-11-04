/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Actions from './components/Actions/Actions'
import SignUpForm from './components/SignUpForm/SignUpForm'
import './SignUp.scss'

const SignUp = () => {
    const [readyToSend, sendReady] = useState(false)
    // we could also useEffects here to disable that button. Lets call that homework...
    const [formvalues, setFormValues] = useState({})
    const cancelHandler = () => console.log('I would nomally forgot thing')

    const objectKeysHaveValue = (keys, obj) => {
        let allHaveValue = true
        keys.forEach((k) => {
            if (!obj[k]) {
                allHaveValue = false
            }
        })

        return allHaveValue
    }

    const checkKeys = (obj) => {
        const keys = Object.keys(obj)

        if (keys.length > 0 && objectKeysHaveValue(keys, obj)) {
            return true
        }
        return false
    }

    const submitFormHandler = () => {
        if (checkKeys(formvalues)) {
            return console.log(`I  would do a thing with ${{ formvalues }}`)
        }
        return console.log(`I would NOT a thing with ${{ formvalues }}`)
    }

    return (
        <div className="sign-up-container" data-testid="sign-up-container">
            <Header title="Sign in" />
            <SignUpForm storeFormValues={setFormValues} />
            <Actions cancelHandler={cancelHandler} createUserHandler={submitFormHandler} />
        </div>
    )
}

export default SignUp
