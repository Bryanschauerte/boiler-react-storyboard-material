/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Actions from './Actions'

describe('spreads/SignUp/components/Actions', () => {
    describe('looks', () => {
        it('renders', () => {
            const props = {
                createUserHandler: jest.fn(() => {}),
                cancelHandler: jest.fn(),
            }

            render(<Actions {...props} />)
            const renderedTF = screen.getByTestId('sign-up-actions-container')
            expect(renderedTF).toBeInTheDocument()
        })
    })

    describe('User interactions', () => {
        describe('user clicks', () => {
            it('on click of signIn button, calls createUserHandler', () => {
                const props = {
                    createUserHandler: jest.fn(),
                    cancelHandler: jest.fn(),
                }

                render(<Actions {...props} />)
                fireEvent.click(screen.getByText(/Sign up/gi))

                expect(props.createUserHandler).toHaveBeenCalled()
            })

            it("on click of 'Cancel' button, calls cancelHandler", () => {
                const props = {
                    createUserHandler: jest.fn(),
                    cancelHandler: jest.fn(),
                }

                render(<Actions {...props} />)
                fireEvent.click(screen.getByText('Cancel'))

                expect(props.cancelHandler).toHaveBeenCalled()
            })
        })
    })
})
