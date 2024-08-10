import {Box, Typography} from '@mui/material'
import {phone} from '@/config'

export const ContactBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '50px', sm: '100px'},
                marginX: {xs: '15px', sm: 0}
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {xs: '5px', sm: '10px'},
                    marginBottom: {xs: '15px', sm: '30px'}
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 24, sm: 28},
                        fontWeight: 300,
                        color: 'var(--red)'
                    }}
                >
                    КОНТАКТЫ
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: 14, sm: 16},
                        fontWeight: 500,
                    }}
                >
                    Мы работаем ежедневно и круглосуточно, без выходных и праздников.
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--black)',
                        fontSize: {xs: 12, sm: 14},
                        fontWeight: 300,
                    }}
                >
                    Вы можете получить консультацию специалиста по телефону: {phone}. Мы ответим Вам максимально
                    оперативно!
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    gap: {xs: '10px', sm: '30px'}
                }}
            >
                <Box
                    sx={{
                        // flex: 1
                        width: {xs: '100%', sm: '60%'}
                    }}
                >
                    <iframe
                        className="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3AWKHUPZ27CZJJI685twB9KZ5f-NYF4kSq&amp;source=constructor"
                        frameBorder="0"></iframe>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: {xs: '5px', sm: '10px'}
                    }}
                >
                    <Box>
                        <Typography sx={{
                            fontSize: {xs: '14px', sm: '16px'},
                            fontWeight: 500,
                            color: 'var(--blue)'
                        }}>Контакты</Typography>

                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>ООО "МСК"</Typography>
                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>ИНН:
                            9725116009</Typography>
                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>КПП:
                            772501001</Typography>
                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>ОГРН:
                            1237700147343</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>
                            Центральный офис
                        </Typography>

                        <Typography sx={{
                            fontSize: {xs: '14px', sm: '16px'},
                            fontWeight: 500,
                            color: 'var(--blue)'
                        }}>г. Москва, Мичуринский проспект, 6</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, fontWeight: 300}}>
                            Телефон
                        </Typography>

                        <Typography sx={{
                            fontSize: {xs: '14px', sm: '16px'},
                            fontWeight: 500,
                            color: 'var(--blue)'
                        }}>{phone}</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
