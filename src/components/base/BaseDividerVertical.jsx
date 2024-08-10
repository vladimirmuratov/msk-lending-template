import {Box} from '@mui/material'

export const BaseDividerVertical = () => (
    <Box
        sx={{
            height: '100%',
            width: {xs: '100px', sm: 0},
            borderRight: '3px solid var(--blue)',
            display: 'flex',
            alignItems: 'center',
        }}
    >

        <img className="service-icon" src="/images/icons-blue/triangle.svg" alt="icon"/>
    </Box>
)
