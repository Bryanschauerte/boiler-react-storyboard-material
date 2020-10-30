import React from 'react'
import { render, screen } from '@testing-library/react'
import LoginBase from './LoginBase'

describe('spreads/LoginBase', () => {
    describe('looks', () => {
        it('renders paper component with default elevation', () => {
            const Child = () => <div data-testid="mock-child" />
            render(
                <LoginBase>
                    <Child />
                </LoginBase>
            )
            const lbaseBaper = screen.getByTestId('login-base-paper')
            const { className } = lbaseBaper
            expect(lbaseBaper).toBeInTheDocument()

            expect(className.indexOf('MuiPaper-elevation2')).not.toEqual(-1)
        })
        it('renders child component', () => {
            const Child = () => <div data-testid="mock-child" />
            render(
                <LoginBase>
                    <Child />
                </LoginBase>
            )

            const childComponent = screen.getByTestId('mock-child')

            expect(childComponent).toBeInTheDocument()
        })

        it('renders paper component with elevation prop', () => {
            const Child = () => <div data-testid="mock-child" />
            render(
                <LoginBase elevation={3}>
                    <Child />
                </LoginBase>
            )

            const lbaseBaper = screen.getByTestId('login-base-paper')
            const { className } = lbaseBaper
            expect(lbaseBaper).toBeInTheDocument()
            expect(className.indexOf('MuiPaper-elevation3')).not.toEqual(-1)
        })
    })
})
