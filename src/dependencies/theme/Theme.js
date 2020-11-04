import { createMuiTheme } from '@material-ui/core/styles'
// import { green, orange } from '@material-ui/core/colors'

// const styleContants = {
//     sizes: {
//         rule: 8,
//     },
// }
// const createStringSize = (num) => `${num} px`
const theme = createMuiTheme({
    // overrides:{
    //     MuiInputBase:{
    //         root:{
    //             height:'36px'
    //         }
    //     }
    // },
    palette: {
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        primary: {
            light: '#5e92f3',
            main: '#1565c0',
            dark: '#003c8f',
            contrastText: '#fff',
        },
        secondary: {
            text: 'rgba(0, 0, 0, 0.54)',
            light: '#a255ff',
            main: '#651fff',
            dark: '#0100ca',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
})

theme.overrides = {
    MuiTextField: {
        root: {
            width: '100%',
            // margin: '8px',
        },
    },
    MuiFormControl: {
        root: {
            width: '100%',
            // margin: '8px',
        },
    },
    MuiInputBase: {
        root: {
            // height: '36px',
        },
    },
    MuiButton: {
        root: {
            height: '32px',
        },
    },

    MuiPaper: {
        root: {
            minHeight: theme.spacing(16),
            minWidth: theme.spacing(16),
        },
    },
}
export default theme
