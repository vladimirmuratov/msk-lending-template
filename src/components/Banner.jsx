import {Box} from '@mui/material'

export const Banner = () => {
    return(
        <Box
            component='figure'
            sx={{
                paddingY: {xs: '25px', sm: '50px'}
            }}
        >
            <img className='banner' src='/images/banner.png' alt='banner'/>
        </Box>
    )
}
