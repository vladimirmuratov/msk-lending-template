import {Box, Typography} from '@mui/material'
import {address, phone} from '@/config'

export const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                display: {xs: 'flex', sm: 'block'},
            }}
        >

            <Box
                sx={{
                    margin: {xs: '0 auto', sm: 0},
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    justifyContent: 'space-between',
                    alignItems: {xs: 'center', sm: 'flex-end'},
                    gap: '10px'
                }}
            >

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    height: {xs: 69, sm: 70, md: 87}
                }}>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', gap: '10px'}}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: 'uppercase',
                                color: 'var(--red)',
                                fontSize: {xs: 24, md: 40},
                                fontWeight: 800
                            }}
                        >МСК</Typography>
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                color: 'var(--red)',
                                fontSize: {xs: 10, md: 20},
                                fontWeight: 800
                            }}
                        >групп</Typography>
                    </Box>
                    <Box sx={{alignSelf: 'flex-end'}}>
                        <Typography
                            sx={{
                                color: 'var(--blue)',
                                fontSize: {xs: 12, md: 18},
                                fontWeight: 800
                            }}
                        >Платная госпитализация</Typography>
                        <Typography
                            sx={{
                                color: 'var(--blue)',
                                fontSize: 12,
                            }}
                        >{address}</Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: {xs: 'space-between'},
                    gap: '20px',
                    alignItems: 'flex-end',
                    width: {xs: '100%', sm: 'auto'}
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Box sx={{alignSelf: 'flex-start'}}>
                            <img className="icon" src="/images/icons-red/phone.svg" alt="icon"/>
                        </Box>
                        <Box sx={{alignSelf: 'flex-end'}}>
                            <Typography
                                sx={{
                                    color: 'var(--blue)',
                                    fontSize: {xs: 12, md: 18},
                                    fontWeight: 800
                                }}
                            >{phone}</Typography>
                            <Typography
                                sx={{
                                    color: 'var(--blue)',
                                    fontSize: 12,
                                }}
                            >заказать звонок</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Box sx={{alignSelf: 'flex-start'}}>
                            <img className="icon" src="/images/icons-red/clock.svg" alt="icon"/>
                        </Box>
                        <Box sx={{alignSelf: 'flex-end'}}>
                            <Typography
                                sx={{
                                    color: 'var(--blue)',
                                    fontSize: {xs: 12, md: 18},
                                    fontWeight: 800
                                }}
                            >24/7</Typography>
                            <Typography
                                sx={{
                                    color: 'var(--blue)',
                                    fontSize: 12,
                                }}
                            >круглосуточно</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
