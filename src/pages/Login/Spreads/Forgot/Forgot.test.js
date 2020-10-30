import React from 'react'
import { render, screen } from '@testing-library/react'
import Forgot from './Forgot'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders the initial sign in tab active', () => {
            render(<Forgot />)
            expect(screen.getByTestId('forgot-container')).toBeInTheDocument()
        })
    })

    // describe('User interactions', () => {
    //     describe('user button', () => {
    //         it('what does the user see', () => {

    //         })
    //     })
    // })
})
