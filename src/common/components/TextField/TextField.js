/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const TextFieldComponent = ({
    error,
    value,
    required,
    disabled,
    label,
    readOnly,
    onChange,
    color,
    type,
    variant,
    testId,
    onBlur,
}) => (
    // const [value, setValue] = useState(defaultValue)

    <TextField
        InputProps={{
            readOnly,
        }}
        inputProps={{
            'data-testid': testId,
        }}
        color={color}
        variant={variant}
        type={type}
        label={label}
        disabled={disabled}
        required={required}
        error={!!error}
        helperText={error ? error.message : false}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
    />
)

// usage import
// const [username, userInput] = useInput({ type: "text" })
// {userInput} -> {username}
// coolness found on https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks while looking for better way than passing handler/value down

TextFieldComponent.propTypes = {
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['text', 'password', 'number']),
    testId: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,

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
    readOnly: false,
    label: '',
    disabled: false,
    onBlur: undefined,
    error: false,
    required: false,
    onChange: undefined,
    value: '',
}
export default TextFieldComponent
