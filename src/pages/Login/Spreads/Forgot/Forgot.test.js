import React from 'react'
import { render, screen } from '@testing-library/react'
import Forgot from './Forgot'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders the initial forgot spread', () => {
            render(<Forgot />)
            expect(screen.getByTestId('forgot-container')).toBeInTheDocument()
        })

        it('renders the header with correct title and subtitle', () => {
            const title = 'So... You forgot your password?'
            const sarcsticRemark = 'Wait here, Ill get help'
            render(<Forgot />)
            expect(screen.getByText(title)).toBeInTheDocument()
            expect(screen.getByText(sarcsticRemark)).toBeInTheDocument()
        })
    })

    // describe('User interactions', () => {
    //     describe('user button', () => {
    //         it('what does the user see', () => {

    //         })
    //     })
    // })
})
