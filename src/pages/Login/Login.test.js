import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Login from './Login'
import { RouteWrapper } from '../../utils/componentWraps'
import { TestRedirect } from '../../utils/Redirect'

describe('pages/Login', () => {
    describe('looks', () => {
        it('renders the initial sign in tab active', () => {
            render(<RouteWrapper needsRoute Component={<Login />} />)
            const signInTab = screen.getByTestId('login-container-sign-in')
            const signInTabClasses = signInTab.className

            expect(signInTabClasses.indexOf('Mui-selected')).not.toEqual(-1)
            // negative case
            const signUpTab = screen.getByTestId('login-container-sign-up')
            const signUpTabClasses = signUpTab.className

            expect(signUpTabClasses.indexOf('Mui-selected')).toEqual(-1)
        })
    })

    describe('User interactions', () => {
        describe('user clicks non-disabled tab', () => {
            it('renders the redirect for that tab', () => {
                render(
                    <RouteWrapper
                        needsRoute
                        Component={<Login RedirectComponent={TestRedirect} />}
                    />
                )
                const signInTabRedirect = screen.getByTestId('Redirect-mock-to-sign-in')
                expect(signInTabRedirect).toBeInTheDocument()

                const signInTab = screen.getByTestId('login-container-sign-in')
                const signInTabClasses = signInTab.className
                // tab active for sign in
                expect(signInTabClasses.indexOf('Mui-selected')).not.toEqual(-1)

                // user clicks forgot
                fireEvent.click(screen.getByTestId('login-container-forgot'))
                const forgotTabRedirect = screen.getByTestId('Redirect-mock-to-forgot')
                expect(forgotTabRedirect).toBeInTheDocument()
                // const signInTab = screen.getByTestId('login-container-sign-in')
                const signInTabClassesPostClick = signInTab.className

                // tab NOT active for sign in
                expect(signInTabClassesPostClick.indexOf('Mui-selected')).toEqual(-1)
            })
        })
    })
})
