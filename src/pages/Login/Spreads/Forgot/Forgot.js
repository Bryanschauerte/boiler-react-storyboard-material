import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import './Forgot.scss'

const Forgot = () => (
    <div className="forgot-container" data-testid="forgot-container">
        <Grid container spacing={3}>
            <Grid item xs>
                xs
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Grid>
            <Grid item xs>
                xs
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Grid>
        </Grid>
    </div>
)

export default Forgot
