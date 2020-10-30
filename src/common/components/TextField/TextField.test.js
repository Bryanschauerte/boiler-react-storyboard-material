/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TextField from './TextField'

describe('spreads/Forgot', () => {
    describe('looks', () => {
        it('renders defaults', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
            }

            render(<TextField {...props} />)
            const renderedTF = screen.getByTestId(props.testId)
            expect(renderedTF).toBeInTheDocument()
        })

        it('with disabled, is disabled', () => {
            const props = {
                label: 'placeholder',
                testId: 'textF-test',
                readOnly: false,
                disabled: true,
            }

            render(<TextField {...props} />)
            const renderedTF = screen.getByTestId(props.testId)
            const classes = renderedTF.className
            expect(classes.indexOf('Mui-disabled')).not.toEqual(-1)
        })
    })

    describe('User interactions', () => {
        describe('user input', () => {
            it('renders editable', () => {
                const props = {
                    label: 'placeholder',
                    testId: 'textF-test',
                }

                render(<TextField {...props} />)
                const renderedTF = screen.getByTestId(props.testId)
                const classes = renderedTF.className

                expect(classes.indexOf('Mui-disabled')).toEqual(-1)
            })

            it('on change calls onChange prop', () => {
                const props = {
                    label: 'placeholder',
                    testId: 'textF-test',
                    onChange: jest.fn(),
                }

                render(<TextField {...props} />)
                const renderedTF = screen.getByTestId(props.testId)
                fireEvent.change(renderedTF, { target: { value: 'works' } })

                expect(props.onChange).toHaveBeenCalledWith('works')
            })
        })
    })
})
