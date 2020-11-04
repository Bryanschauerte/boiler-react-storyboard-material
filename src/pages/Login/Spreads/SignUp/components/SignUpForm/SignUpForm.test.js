/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import SignUPForm from './SignUpForm'

describe('spreads/SignUp/components/SignUp', () => {
    describe('looks', () => {
        it('renders defaults', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
            }

            render(<SignUPForm {...props} />)
            const renderedTF = screen.getByTestId('form-container')
            expect(renderedTF).toBeInTheDocument()
        })

        it('renders each text field', () => {
            const props = {}

            render(<SignUPForm {...props} />)
            const userName = screen.getAllByText('User Name')[0]

            const password = screen.getAllByText('Password')[0]
            expect(userName).toBeInTheDocument()
            expect(password).toBeInTheDocument()
        })
    })

    describe('User interactions', () => {
        describe('user input', () => {
            afterEach(cleanup)
            it('calls storeFormValues when each field has valid input', () => {
                const props = {
                    storeFormValues: jest.fn(),
                }

                render(<SignUPForm {...props} />)
                const inputs = screen.getAllByTestId('input-test')

                fireEvent.change(inputs[0], { target: { value: 'usernamestuff' } })
                fireEvent.blur(inputs[0])
                expect(props.storeFormValues).toHaveBeenCalledTimes(0)
                fireEvent.change(inputs[1], { target: { value: 'passwordStuff' } })
                fireEvent.blur(inputs[1])

                expect(props.storeFormValues).toHaveBeenCalledTimes(0)
                fireEvent.change(inputs[2], { target: { value: 'email@hi.com' } })
                fireEvent.blur(inputs[2])

                expect(props.storeFormValues).toHaveBeenCalled()
            })
        })
    })
})
