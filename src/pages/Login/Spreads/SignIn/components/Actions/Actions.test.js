/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Actions from './Actions'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders', () => {
            const props = {
                forgotHandler: jest.fn(),
                signInHandler: jest.fn(),
            }

            render(<Actions {...props} />)
            const renderedTF = screen.getByTestId('actions-container')
            expect(renderedTF).toBeInTheDocument()
        })
    })

    describe('User interactions', () => {
        describe('user clicks', () => {
            it('on click of button, calls signInHandler', () => {
                const props = {
                    forgotHandler: jest.fn(),
                    signInHandler: jest.fn(),
                }

                render(<Actions {...props} />)
                fireEvent.click(screen.getByText('Sign In'))

                expect(props.signInHandler).toHaveBeenCalled()
            })

            it("on click of 'Forgot My Password', calls forgotHandler", () => {
                const props = {
                    forgotHandler: jest.fn(),
                    signInHandler: jest.fn(),
                }

                render(<Actions {...props} />)
                fireEvent.click(screen.getByText('Forgot My Password'))

                expect(props.forgotHandler).toHaveBeenCalled()
            })
        })
    })
})
