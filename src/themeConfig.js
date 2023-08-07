import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    
    palette: {
        primary: {
            // main: '#dbdbdb'
            main: '#ffffff'
            // main: '--primary'
        },
        secondary: {
            main: '#080708'
        },
        accent: {
            // main: '#9e0031'
            main: '#E50914'
        },
        detail: {
            // main: '#086375'
            main: '#086375'
        }
    },  
    spacing: (factor) => `${0.25 * factor}rem`
});

export const customThemeDark = createTheme({
    palette: {
        primary: {
            main: '#080708'
        },
        secondary: {
            // main: '#dbdbdb'
            main: '#ffffff'
        },
        accent: {
            main: '#086375'
        },
        detail: {
            main: '#086375'
        }
    },
    spacing: (factor) => `${0.25 * factor}rem`
});