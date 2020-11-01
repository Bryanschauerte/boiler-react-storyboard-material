/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SignInForm from './SignInForm'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders defaults', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
            }

            render(<SignInForm {...props} />)
            const renderedTF = screen.getByTestId('sign-in-form-container')
            expect(renderedTF).toBeInTheDocument()
        })

        it('renders each text field', () => {
            const props = {}

            render(<SignInForm {...props} />)
            const userName = screen.getAllByText('User Name')[0]

            const password = screen.getAllByText('Password')[0]
            expect(userName).toBeInTheDocument()
            expect(password).toBeInTheDocument()
        })
    })

    describe('User interactions', () => {
        describe('user input', () => {
            it('calls storeFormValues when each field has valid input', () => {
                const props = {
                    storeFormValues: jest.fn(),
                }

                render(<SignInForm {...props} />)
                const inputs = screen.getAllByTestId('input-test')

                fireEvent.change(inputs[0], { target: { value: 'usernamestuff' } })
                fireEvent.blur(inputs[0])
                expect(props.storeFormValues).toHaveBeenCalledTimes(0)
                fireEvent.change(inputs[1], { target: { value: 'passwordStuff' } })
                fireEvent.blur(inputs[1])

                expect(props.storeFormValues).toHaveBeenCalled()
            })
        })
    })
})
