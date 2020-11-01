/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders one textField per userInputArray item', () => {
            const props = {
                userInputArray: [
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
                ],
            }

            render(<Form {...props} />)
            const renderedTF = screen.getByTestId('form-container')

            expect(renderedTF).toBeInTheDocument()
            expect(screen.getAllByText('User Name')[0]).toBeInTheDocument()
            expect(screen.getAllByText('Password')[0]).toBeInTheDocument()
            expect(screen.getAllByText('Email')[0]).toBeInTheDocument()
        })

        it('renders orientation default of column', () => {
            const props = {
                userInputArray: [
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
                ],
            }

            render(<Form {...props} />)
            const renderedTF = screen.getByTestId('form-container')
            const { className } = renderedTF
            expect(className.indexOf('columnForm')).not.toEqual(-1)
        })

        it('renders orientation prop as row adds row class', () => {
            const props = {
                orientation: 'row',
                userInputArray: [
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
                ],
            }

            render(<Form {...props} />)
            const renderedTF = screen.getByTestId('form-container')
            const { className } = renderedTF
            expect(className.indexOf('rowForm')).not.toEqual(-1)
        })
    })

    // describe('User interactions', () => {
    //     describe('user input', () => {
    //         it('calls inputBlur when a field is clicked out with the total state object', () => {})
    //     })
    // })
})
