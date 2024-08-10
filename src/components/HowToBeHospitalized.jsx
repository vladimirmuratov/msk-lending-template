import {Box, Typography} from '@mui/material'
import {BaseStep} from '@/components/base/BaseStep'

export const HowToBeHospitalized = ({steps = []}) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                paddingRight: {xs: 0, sm: '23px'},
                marginX: {xs: '15px', sm: 0}
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontSize: {xs: 24, sm: 28},
                    fontWeight: 300,
                    color: 'var(--red)',
                    marginBottom: {xs: '15px', sm: '30px'}
                }}
            >
                КАК ГОСПИТАЛИЗИРОВАТЬСЯ В НУЖНУЮ БОЛЬНИЦУ
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr 1fr'},
                    columnGap: '30px',
                    rowGap: '30px',
                    flexWrap: 'wrap'
                }}
            >
                {steps.map((item, index, array) => <BaseStep key={item.id} {...item} idx={index}
                                                             totalLength={array.length}/>)}
            </Box>
        </Box>
    )
}
