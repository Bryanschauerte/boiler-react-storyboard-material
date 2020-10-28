import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import Button from '@material-ui/core/Button'

const ButtonComponent = ({
    variant,
    disabled,
    className,
    size,
    icon,
    label,
    color,
    onClick,
    testId,
}) => {
    const hasIcon = icon.startIcon || icon.endIcon

    if (hasIcon) {
        return icon.endIcon ? (
            <Button
                role="button"
                data-testid={testId}
                size={size}
                variant={variant}
                disabled={disabled}
                onClick={onClick}
                color={color}
                className={className}
                endIcon={icon.endIcon}
            >
                {label}
            </Button>
        ) : (
            <Button
                role="button"
                size={size}
                variant={variant}
                disabled={disabled}
                onClick={onClick}
                color={color}
                className={className}
                startIcon={icon.startIcon}
            >
                {label}
            </Button>
        )
    }

    return (
        <Button
            role="button"
            size={size}
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            color={color}
            className={className}
        >
            {label}
        </Button>
    )
}

ButtonComponent.propTypes = {
    className: PropTypes.string,
    testId: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'contained', 'warning']),
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'secondary', 'warning']),
    icon: PropTypes.shape({
        startIcon: PropTypes.element,
        endIcon: PropTypes.element,
    }),
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

ButtonComponent.defaultProps = {
    icon: {},
    className: '',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
    testId: 'button-test',
}

export default ButtonComponent
