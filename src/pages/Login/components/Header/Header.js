import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Header({ title, subTitle }) {
    return (
        <div data-testid="header-container">
            <div>
                <Typography variant="h1">{title}</Typography>
            </div>
            {subTitle && (
                <div>
                    <Typography variant="subtitle1">{subTitle}</Typography>
                </div>
            )}
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
Header.defaultProps = {
    subTitle: '',
}

export default Header
