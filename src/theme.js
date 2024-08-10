import {createTheme} from '@mui/material/styles'
import {Open_Sans} from 'next/font/google'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export const theme = createTheme({
    typography: {
        fontFamily: openSans.style.fontFamily,
    },
    breakpoints: {
        values: {
            xs: 0,
            // sm: 770,
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1536,
        }}
})
