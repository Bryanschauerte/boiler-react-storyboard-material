import React from 'react'
import { screen, render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
    describe('User view', () => {
        it('renders defaults', () => {
            const title = 'some test title'
            render(<Footer title={title} />)
            const container = screen.getByTestId('footer-container')
            expect(container).toBeInTheDocument()
        })
        it('renders title', () => {
            const title = 'some test title'
            render(<Footer title={title} />)
            const container = screen.getByText('some test title')
            expect(container).toBeInTheDocument()
        })
        it('renders subTitle', () => {
            const subTitle = 'test sub title'
            const title = 'some test title'
            render(<Footer title={title} subTitle={subTitle} />)
            const container = screen.getByText(subTitle)
            expect(container).toBeInTheDocument()
        })
    })
})
