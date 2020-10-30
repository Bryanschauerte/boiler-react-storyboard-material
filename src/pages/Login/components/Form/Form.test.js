/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders defaults', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
            }

            render(<Form {...props} />)
            const renderedTF = screen.getByTestId('form-container')
            expect(renderedTF).toBeInTheDocument()
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
