import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Forgot = () => (
    <div data-testid="forgot-container">
        <Grid container spacing={3}>
            <Grid item xs>
                <Paper className="paper">
                    xs
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
)

export default Forgot
