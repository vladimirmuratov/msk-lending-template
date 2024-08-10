import {Box, Typography} from '@mui/material'
import {BaseServiceCard} from '@/components/base/BaseServiceCard'

export const PaidHospitalizationBlock = ({services = []}) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                marginX: {xs: '15px', sm: 0}
            }}
        >
            <Box
                sx={{
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
                    ПЛАТНАЯ ГОСПИТАЛИЗАЦИЯ В МОСКВЕ
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: 14, sm: 16},
                        fontWeight: 300,
                    }}
                >
                    Организация платной госпитализации в стационар ведущих клиник Москвы в экстренном и плановом порядке
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'},
                    rowGap: {xs: '15px', sm: '20px'},
                    columnGap: '10px'
                }}
            >
                {services.map((item) => <BaseServiceCard key={item.id} {...item}/>)}
            </Box>
        </Box>
    )
}
