import React from 'react'
import { render, screen } from '@testing-library/react'
import SignUp from './SignUp'

describe('spreads/SignUp', () => {
    describe('looks', () => {
        it('renders the initial sign in tab active', () => {
            render(<SignUp />)
            expect(screen.getByTestId('sign-up-container'))
        })
    })

    // describe('User interactions', () => {
    //     describe('user button', () => {
    //         it('what does the user see', () => {

    //         })
    //     })
    // })
})
