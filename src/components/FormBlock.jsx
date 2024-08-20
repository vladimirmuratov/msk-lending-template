import {Box, Typography} from '@mui/material'
import {MessageForm} from '@/components/MessageForm'

export const FormBlock = ({onFailed, onSuccess}) => {
    return (
        <Box
            id="contact"
            component="section"
            sx={{
                bgcolor: 'var(--violet)',
                padding: {xs: '16px', sm: '32px'},
                color: 'var(--white)'
            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 24, sm: 28},
                        fontWeight: 300,
                        textTransform: 'uppercase',
                        lineHeight: 1.3,
                        marginBottom: {xs: '5px', sm: '10px'},
                        width: {xs: '100%', sm: '60%'}
                    }}
                >
                    ОСТАВИТЬ ЗАЯВКУ
                    НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: '10px', sm: '14px'},
                        fontWeight: 300,
                        marginBottom: {xs: '10px', sm: '15px'},
                        width: {xs: '100%', sm: '60%'}
                    }}
                >
                    Мы свяжемся с вами и расскажем какие документы потребуются для организации платной госпитализации.
                </Typography>
            </Box>

            <MessageForm onFailed={onFailed} onSuccess={onSuccess}/>

        </Box>
    )
}
