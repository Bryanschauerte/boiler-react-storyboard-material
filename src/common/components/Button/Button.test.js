/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders primary by default, displays label', () => {
            const label = 'I Am BUTTON'

            render(<Button label={label} />)
            const labelInDom = screen.getByText(label)

            expect(labelInDom).toBeInTheDocument()
            const btn = screen.getByRole('button')
            const classes = btn.className
            const hasRightClass = classes.indexOf('MuiButton-containedPrimary')
            expect(hasRightClass).not.toBe(-1)
        })

        it('renders secondary, displays label', () => {
            const props = {
                label: 'I Am BUTTON',
                color: 'secondary',
            }

            render(<Button {...props} />)
            const labelInDom = screen.getByText(props.label)

            expect(labelInDom).toBeInTheDocument()
            const btn = screen.getByRole('button')
            const classes = btn.className
            const hasRightClass = classes.indexOf('MuiButton-containedSecondary')
            expect(hasRightClass).not.toBe(-1)
        })

        it('renders disabled button with prop, displays label', () => {
            const props = {
                label: 'I Am BUTTON',
                color: 'secondary',
                disabled: true,
            }

            render(<Button {...props} />)
            const labelInDom = screen.getByText(props.label)

            expect(labelInDom).toBeInTheDocument()
            const btn = screen.getByRole('button')
            const classes = btn.className
            const hasRightClass = classes.indexOf('Mui-disabled')
            expect(hasRightClass).not.toBe(-1)
            expect(btn.disabled).toEqual(true)
        })
    })

    describe('User interactions', () => {
        describe('user button', () => {
            it('click calls onClick prop', () => {
                const props = {
                    label: 'I Am BUTTON',
                    onClick: jest.fn(),
                }

                render(<Button {...props} />)
                const btn = screen.getByRole('button')
                fireEvent.click(btn)
                expect(props.onClick).toHaveBeenCalled()
            })

            it('diabled button click does NOT call onClick prop', () => {
                const props = {
                    label: 'I Am BUTTON',
                    onClick: jest.fn(),
                    disabled: true,
                }

                render(<Button {...props} />)
                const btn = screen.getByRole('button')
                fireEvent.click(btn)
                expect(props.onClick).not.toHaveBeenCalled()
            })
        })
    })
})
