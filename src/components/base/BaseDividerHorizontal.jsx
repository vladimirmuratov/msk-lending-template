import {Box} from '@mui/material'

export const BaseDividerHorizontal = () => (
    <Box
        sx={{
            height: '100%',
            width: {xs: '100%', sm: 0},
            borderTop: '3px solid var(--blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <img
            style={{transform: 'rotate(90deg)',  marginTop: '-11px'}}
            className="service-icon"
            src="/images/icons-blue/triangle.svg"
            alt="icon"
        />
    </Box>
)
