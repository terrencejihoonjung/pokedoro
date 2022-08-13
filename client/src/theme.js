import { createTheme } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#353535'
        },
        secondary: {
            main: '#f7f7f7'
        },
        thirdRed: {
            main: '#e35b5f'
        },
        thirdGreen: {
            main: '#6bc29d'
        },
        thirdBlue: {
            main: '#84cdce'
        },

        background: {
            default: '#f7f7f7'
        },
    },

    typography: {
        fontFamily: ['Raleway', 'Roboto', 'sans-serif'].join(","),
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700
    },
    
    
})