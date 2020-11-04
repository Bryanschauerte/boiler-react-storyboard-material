import React from 'react'
import { render, screen } from '@testing-library/react'

import Spreads from './Spreads'
import { MemoryRouterWrapper } from '../../../utils/componentWraps'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    // useParams: () => ({
    //     companyId: 'company-id1',
    //     teamId: 'team-id1',
    // }),
    useRouteMatch: () => ({ url: '/login', path: '' }),
}))
// thanks overflow...

describe('spreads/Spreads', () => {
    describe('route rendering', () => {
        it("renders the '/sign-in' path component", () => {
            render(
                <MemoryRouterWrapper initialEntries={['/sign-in']}>
                    <Spreads />
                </MemoryRouterWrapper>
            )

            expect(screen.getByTestId('sign-in-container')).toBeInTheDocument()
        })

        it("renders the '/forgot' path component", () => {
            render(
                <MemoryRouterWrapper initialEntries={['/forgot']}>
                    <Spreads />
                </MemoryRouterWrapper>
            )
            expect(screen.getByTestId('forgot-container')).toBeInTheDocument()
        })

        it("renders the '/sign-up' path component", () => {
            render(
                <MemoryRouterWrapper initialEntries={['/sign-up']}>
                    <Spreads />
                </MemoryRouterWrapper>
            )
            expect(screen.getByTestId('sign-up-container')).toBeInTheDocument()
        })

        it("redirect to the '/sign-in' path ", async () => {
            render(
                <MemoryRouterWrapper initialEntries={['/iliketomashkeys']}>
                    <Spreads />
                </MemoryRouterWrapper>
            )
            await expect(screen.getByTestId('sign-in-container')).toBeInTheDocument()
        })
    })

    // describe('User interactions', () => {
    //     describe('user button', () => {
    //         it('what does the user see', () => {

    //         })
    //     })
    // })
})
