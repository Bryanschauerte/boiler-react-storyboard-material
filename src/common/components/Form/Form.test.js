/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders one textField per userInputArray item', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
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

        // it('with disabled, is disabled', () => {
        //     const props = {
        //         label: 'placeholder',
        //         testId: 'textF-test',
        //         editable: false,
        //         disabled: true,
        //     }

        //     render(<TextField {...props} />)
        //     const renderedTF = screen.getByTestId(props.testId)
        //     const classes = renderedTF.className
        //     expect(classes.indexOf('Mui-disabled')).not.toEqual(-1)
        // })
    })

    // describe('User interactions', () => {
    //     describe('user input', () => {

    //     })
    // })
})
