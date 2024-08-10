import {Box} from '@mui/material'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

export const Layout = ({children}) => {
    return (
        <Box
            className='container'
            sx={{minHeight: '100vh'}}
        >
            <Header/>
            {children}
            <Footer/>
        </Box>
    )
}
