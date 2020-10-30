import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Footer({ title, subTitle }) {
    return (
        <div data-testid="footer-container">
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
Footer.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
Footer.defaultProps = {
    subTitle: '',
}

export default Footer
