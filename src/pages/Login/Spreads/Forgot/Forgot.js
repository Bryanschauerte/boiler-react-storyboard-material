import React from 'react'

import './Forgot.scss'
import Header from '../../components/Header/Header'

const Forgot = () => (
    <div className="forgot-container" data-testid="forgot-container">
        <Header title="So... You forgot your password?" subTitle="Wait here, Ill get help" />
    </div>
)

export default Forgot
