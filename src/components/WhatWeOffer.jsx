import {Box, Typography} from '@mui/material'

export const WhatWeOffer = ({list1 = [], list2 = [], list3 = []}) => {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: 'var(--blue)',
                padding: {xs: '16px', sm: '32px'},
                color: 'var(--white)'
            }}
        >

            <Typography
                variant="h4"
                sx={{
                    fontSize: {xs: 24, sm: 28},
                    fontWeight: 300,
                    marginBottom: {xs: '16px', sm: '32px'}
                }}
            >
                ЧТО МЫ ПРЕДЛАГАЕМ
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'},
                    gap: {xs: '10px', sm: '20px'}
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: 18,
                            marginBottom: {xs: '10px', sm: '15px'}
                        }}
                    >
                        Программу лечения с расчётом стоимости,
                        при:
                    </Typography>

                    <ul>
                        {list1.map(({id, text}) => <li key={id}>{text}</li>)}
                    </ul>

                    <Box
                        sx={{
                            marginTop: {xs: '15px', sm: '20px'},
                            bgcolor: 'var(--white)',
                            color: 'var(--red)',
                            paddingY: '15px',
                            paddingX: '10px',
                            width: {xs: '100%', sm: '80%'}
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: {xs: 12, sm: 14},
                                fontWeight: 500
                            }}
                        >Консультация специалиста – 0 руб.
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: 18,
                                marginBottom: {xs: '10px', sm: '15px'}
                            }}
                        >
                            Качественное лечение
                        </Typography>

                        <ul>
                            {list2.map(({id, text}) => <li key={id}>{text}</li>)}
                        </ul>

                        <Box
                            sx={{
                                marginTop: {xs: '15px', sm: '20px'},
                                bgcolor: 'var(--white)',
                                color: 'var(--red)',
                                paddingY: '15px',
                                paddingX: '10px',
                                width: {xs: '100%', sm: '80%'}
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    fontSize: {xs: 12, sm: 14},
                                    fontWeight: 500
                                }}
                            >Лечение по официальным ценам.
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 18,
                                marginY: {xs: '10px', sm: '15px'}
                            }}
                        >
                            Личный куратор
                        </Typography>

                        <ul>
                            {list3.map(({id, text}) => <li key={id}>{text}</li>)}
                        </ul>

                        <Box
                            sx={{
                                marginTop: {xs: '15px', sm: '20px'},
                                bgcolor: 'var(--white)',
                                color: 'var(--red)',
                                paddingY: '15px',
                                paddingX: '10px',
                                width: {xs: '100%', sm: '80%'}
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    fontSize: {xs: 12, sm: 14},
                                    fontWeight: 500
                                }}
                            >Личный куратор – 0 руб.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}
