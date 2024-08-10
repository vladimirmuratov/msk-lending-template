import {Box, Typography} from '@mui/material'
import {BaseDividerVertical} from '@/components/base/BaseDividerVertical'
import {BaseDividerHorizontal} from '@/components/base/BaseDividerHorizontal'

export const BaseStep = ({icon, title, text, idx, totalLength}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'}
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {xs: '5px', sm: '10px'},
                    flexShrink: 1,
                    // width: '35%'
                }}
            >
                <img className="service-icon" src={icon} alt="icon"/>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'var(--blue)',
                        lineHeight: 1.2,
                        fontWeight: 600
                    }}
                >{title}</Typography>
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: 300
                    }}
                >{text}</Typography>
            </Box>

            {(idx !== totalLength - 1) && (
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <BaseDividerVertical/>
                </Box>
            )}

            {(idx !== totalLength - 1) && (
                <Box sx={{display: {xs: 'block', sm: 'none'}, marginTop: {xs: '10px', sm: 0}}}>
                    <BaseDividerHorizontal/>
                </Box>
            )}
        </Box>
    )
}
