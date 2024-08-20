import {Box, Button, Checkbox, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import {BaseInput} from '@/components/base/BaseInput'
import {useState} from 'react'
import {sendEmail} from '@/lib/sendEmail'
import {BaseDatePicker} from '@/components/base/BaseDatePicker'

export const MessageForm = ({onSuccess, onFailed}) => {
    const regExpEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState()
    const [checked, setChecked] = useState(false)
    const {control, handleSubmit, formState: {errors, isSubmitting}, reset, register, watch} = useForm({
        defaultValues: {
            person: '',
            dateBirth: '',
            phone: '',
            email: '',
            info: ''
        }
    })

    const handleUploadFile = (e) => {
        console.log(e.target.files[0])
        setFileName(e.target.files[0].name)
        setFile(e.target.files[0])
    }

    const onSubmit = async (data) => {
        const fd = new FormData()
        fd.append('file', file)

        data = {
            ...data,
            file: fd
        }

        const resStatus = await sendEmail(data)

        if (resStatus === 250) {
            reset()
            setChecked(false)
            onSuccess(true)
        } else if (resStatus === 404) {
            onFailed(true)
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}

        >

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'},
                    gap: {xs: '10px', sm: '20px'}
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        borderRadius: '10px',
                    }}
                >

                    <BaseInput control={control} label="Ваше имя" name="person" required={true}
                               errorType={errors?.person?.type}
                               mask="Смирнов Иван"/>
                    <BaseDatePicker control={control} label="Дата рождения" name="dateBirth"/>
                    <BaseInput control={control} label="Телефон" name="phone" required={true}
                               errorType={errors?.phone?.type}
                               mask="+7 (000) 000 00 00" regexp={regExpPhone}/>

                    <BaseInput control={control} label="Email" name="email" mask="smirnov@mail.ru" regexp={regExpEmail}
                               errorType={errors?.email?.type}/>
                    <BaseInput control={control} label="Доп.информация" name="info" multiline={true}
                               mask="Опишите ситуацию"/>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto',
                        gap: '10px',
                        borderRadius: '10px',
                        width: {xs: '100%', md: '80%'}
                    }}
                >

                    <Box>
                        <Button
                            disabled
                            variant="contained"
                            component="label"
                            sx={{
                                backgroundColor: 'var(--white)',
                                color: 'var(--black)',
                                '&:hover': {
                                    color: 'var(--white)'
                                }
                            }}
                        >
                            Загрузить файлы
                            <input type="file" hidden  {...register('file')} onChange={handleUploadFile}/>
                        </Button>

                        {fileName && <Typography>{fileName}</Typography>}

                        <Typography
                            sx={{
                                paddingTop: '10px',
                                fontSize: 12,
                                fontWeight: 300
                            }}
                        >
                            Здесь вы можете прикрепить медицинские документы
                            Подойдут электронные копии или фото всех
                            имеющихся документов: выписной эпикриз, выписка из
                            истории болезни, результаты обследований, УЗИ,
                            снимки МРТ или рентгенографии (обычно их
                            записывают на CD и выдают вместе с результатами
                            обследования), расшифровка снимков и пр.
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox checked={checked} onChange={handleChange} sx={{alignSelf: 'start'}}/>
                        <Typography sx={{fontSize: 11, lineHeight: '11px'}}>
                            Я согласен на обработку персональных данных в соответствии
                            c Политикой конфиденциальности
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: {xs: '5px', sm: '10px'}
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={!checked || isSubmitting}
                            sx={{
                                backgroundColor: 'var(--white)',
                                color: 'var(--black)',
                                '&:hover': {
                                    color: 'var(--white)'
                                }
                            }}
                        >Отправить</Button>

                        <Typography sx={{fontSize: 11, lineHeight: 1.1, width: '50%'}}>
                            Если по какой-то причине вам не удается отправить
                            заявку, можете отправить данные на электронную
                            почту:
                            moscowsc.post@yandex.ru
                        </Typography>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}
