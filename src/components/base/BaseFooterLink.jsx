import {Box, Link} from '@mui/material'

export const BaseFooterLink = ({label, path}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '5px'
            }}
        >
            <img className="icon" src="/images/icons-blue/triangle.svg" alt="icon"/>
            <Link
                sx={{
                    textDecoration: 'none',
                    color: 'var(--black)',
                    fontSize: 14,
                    fontWeight: 300
                }}
                href={path}
            >{label}</Link>
        </Box>
    )
}
