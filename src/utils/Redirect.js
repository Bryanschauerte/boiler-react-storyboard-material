import React from 'react'
import PropTypes from 'prop-types'

export const TestRedirect = ({ to }) => (
    <div data-testid={`Redirect-mock-to-${to}`}>
        REDIRECTTO:
        {to}
    </div>
)

TestRedirect.defaultProps = {
    to: '',
}

TestRedirect.propTypes = {
    to: PropTypes.string,
}

// export const redirectTestHelper = (to, jest)=>{
//     jest.mock('nodeModulePackage', () => jest.fn(() => {
//         Redirect:
//     }))
// }
