/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '../TextField/TextField'
import './Form.scss'

// input blur to pass back up the state
function Form({ inputBlur, userInputArray, orientation, className }) {
    const stateHandling = {}
    userInputArray.forEach((item) => {
        stateHandling[item.stateKey] = item.value
    })
    const [valueObj, setValue] = useState(stateHandling)
    // eslint-disable-next-line operator-linebreak
    const rowOrColumnClasses = orientation === 'row' ? 'rowForm' : 'columnForm'
    const classes = `formContainer ${className} ${rowOrColumnClasses}`

    return (
        <form onSubmit={(x) => x.preventDefault()} className={classes} data-testid="form-container">
            {userInputArray.map((textFieldProps) => (
                <TextField
                    key={textFieldProps.stateKey}
                    {...textFieldProps}
                    onBlur={() => inputBlur(valueObj)}
                    onChange={(v) =>
                        setValue({
                            ...valueObj,
                            [textFieldProps.stateKey]: v,
                        })}
                    value={valueObj[textFieldProps.stateKey]}
                />
            ))}
        </form>
    )
}

// user input array is array of object.

// can accept TextField props
// {
//     error,
//     value,
//     required,
//     disabled,
//     label,
//     readOnly,
//     onChange,
//     color,
//     type,
//     variant,
//     testId,
// }
// add an additional key 'stateKey' that will be used for a state key.(easier than using the label)
// for each object in array, it will create handler for user input and pass to TextField Child

// export function CreateForm({ userInputArray, onSubmit }) {
//     const stateHandling = {}
//     userInputArray.forEach(item=>{
//         stateHandling[item.stateKey]:item.value
//     })
//     const [setValue, valueObj] = useState(stateHandling)
//     console.log(stateHandling, 'stateHandling')

//     return <Form userInputArray/>

// }

Form.defaultProps = {
    className: '',
    inputBlur: console.log,
    orientation: 'column',
}
Form.propTypes = {
    className: PropTypes.string,
    inputBlur: PropTypes.func,
    orientation: PropTypes.oneOf(['row', 'column']),
    userInputArray: PropTypes.arrayOf(PropTypes.shape(TextField.propTypes)).isRequired,
}
export default Form
