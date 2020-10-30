import React from 'react'
import TextField from '../../../../common/components/TextField/TextField'
import './Form.scss'

function Form() {
    // const [setThing, thing] = useState({})
    return (
        <div data-testid="form-container">
            <TextField label="User Name" />
            <TextField label="Password" type="password" />
        </div>
    )
}
Form.defaultProps = {}
Form.propTypes = {}
export default Form
