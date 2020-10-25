import React from 'react'
import { render, screen } from '@testing-library/react'
import SignIn from './SignIn'

describe('spreads/SignIn', () => {
    describe('looks', () => {
        it('renders the initial sign in tab active', () => {
            render(<SignIn />)
            expect(screen.getByTestId('sign-in-container'))
        })
    })

    // describe('User interactions', () => {
    //     describe('user button', () => {
    //         it('what does the user see', () => {

    //         })
    //     })
    // })
})
