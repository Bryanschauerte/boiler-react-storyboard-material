/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const TextFieldComponent = ({
    error,
    defaultValue,
    required,
    disabled,
    label,
    editable,
    color,
    type,
    variant,
    testId,
}) => {
    const [value, setValue] = useState(defaultValue)
    return (
        <TextField
            InputProps={{
                readOnly: editable,
            }}
            inputProps={{
                'data-testid': testId,
            }}
            disabled={!editable}
            color={color}
            variant={variant}
            type={type}
            label={label}
            disabled={disabled}
            required={required}
            error={!!error}
            helperText={error ? error.message : false}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

// usage import
// const [username, userInput] = useInput({ type: "text" })
// {userInput} -> {username}
// coolness found on https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks while looking for better way than passing handler/value down

TextFieldComponent.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']),
    testId: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    editable: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.shape({
            message: PropTypes.string,
        }),
        PropTypes.bool,
    ]),
}
TextFieldComponent.defaultProps = {
    variant: 'outlined',
    testId: 'input-test',
    color: 'primary',
    type: 'text',
    editable: true,
    label: '',
    disabled: false,
    defaultValue: '',
    error: false,
    required: false,
}
export default TextFieldComponent
