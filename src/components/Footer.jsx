import {Box, Link, Typography} from '@mui/material'
import {address, email, footerList1, footerList2, phone} from '@/config'
import {BaseFooterLink} from '@/components/base/BaseFooterLink'

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'var(--gray)',
                padding: {xs: '15px', sm: '25px'},
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: {xs: '10px', sm: '15px'}
                }}
            >
                <Box>
                    <Typography sx={{
                        fontSize: {xs: '14px', sm: '16px'},
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>О проекте</Typography>

                    {footerList1.map((item) => <BaseFooterLink key={item.id} {...item}/>)}
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: {xs: '14px', sm: '16px'},
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>Услуги</Typography>

                    {footerList2.map((item) => <BaseFooterLink key={item.id} {...item}/>)}
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: {xs: '14px', sm: '16px'},
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>Платная госпитализация:</Typography>

                    <Typography sx={{
                        fontSize: {xs: '18px', sm: '24px'},
                        fontWeight: 300,
                        color: 'var(--red)',
                    }}>{phone}</Typography>

                    <Typography sx={{
                        fontSize: {xs: '14px', sm: '16px'},
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>{email}</Typography>

                    <Box
                        sx={{
                            marginTop: {xs: '10px', sm: '15px'},
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <Link
                            href="#contact"
                            sx={{
                                textDecoration: 'none',
                                color: 'var(--black)',
                                fontWeight: 300,
                                backgroundColor: 'var(--white)',
                                paddingX: '15px',
                                paddingY: '10px',
                                textAlign: 'center'
                            }}
                        >Отправить заявку</Link>

                        <Link
                            href="#contact"
                            sx={{
                                textDecoration: 'none',
                                color: 'var(--black)',
                                fontWeight: 300,
                                backgroundColor: 'var(--white)',
                                paddingX: '15px',
                                paddingY: '10px',
                                textAlign: 'center'
                            }}
                        >Заказать звонок</Link>
                    </Box>
                </Box>
            </Box>
            <Typography
                sx={{
                    marginTop: {xs: '20px', sm: '30px'},
                    fontSize: 14,
                    fontWeight: 300,
                    textAlign: 'center'
                }}
            >&copy;2017 - {new Date().getFullYear()} OOO "МСК"</Typography>
        </Box>
    )
}
