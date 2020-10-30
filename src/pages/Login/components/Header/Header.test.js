import React from 'react'
import { screen, render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
    describe('User view', () => {
        it('renders defaults', () => {
            const title = 'some test title'
            render(<Header title={title} />)
            const container = screen.getByTestId('header-container')
            expect(container).toBeInTheDocument()
        })
        it('renders title', () => {
            const title = 'some test title'
            render(<Header title={title} />)
            const container = screen.getByText('some test title')
            expect(container).toBeInTheDocument()
        })
        it('renders subTitle', () => {
            const subTitle = 'test sub title'
            const title = 'some test title'
            render(<Header title={title} subTitle={subTitle} />)
            const container = screen.getByText(subTitle)
            expect(container).toBeInTheDocument()
        })
    })
})
