import {Box, Typography} from '@mui/material'

export const BaseServiceCard = ({icon, title, text}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: {xs: '5px', sm: '10px'}
            }}
        >
            <img className="service-icon" src={icon} alt="icon"/>
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'var(--blue)',
                        lineHeight: 1.2,
                    }}
                >{title}</Typography>
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: 300
                    }}
                >{text}</Typography>
            </Box>
        </Box>
    )
}
