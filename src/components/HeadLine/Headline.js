/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import {useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaWindowClose} from 'react-icons/fa'
import Slider from 'react-slick'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import apiService from './apiService'
import {Alert, Collapse} from '@mui/material'
import backgrrr from './242156633_649695046407375_3544299606577741989_n_2_aa28fb4019.png'

const Headline = ({items}) => {
  const theme = useTheme()
  const [mail, setMail] = useState('')
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)

  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  })
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  let slidesToShow = 1
  if (isXs) {
    slidesToShow = 1
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  const handleSend = () => {
    if (mail === '') return
    apiService.noAuthInsert('article-subscriptions', {mail: mail}).then(
      (e) => {
        if (e.statusCode === 400) {
          setOpen(true)
          setError(true)
        } else {
          setOpen(true)
          setError(false)
        }
      })
  }
  return (
    <Box style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
      <FaArrowAltCircleLeft style={{
        position: 'absolute',
        top: '50%',
        left: '32px',
        fontSize: '3rem',
        color: '#000',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none'
      }}/>
      <FaArrowAltCircleRight style={{
        position: 'absolute',
        top: '50%',
        right: '32px',
        fontSize: '3rem',
        color: '#000',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none'
      }}/>
      <Slider {...sliderOpts}>
        <Box paddingX={2}>
          <Box
            component={Card}
            width={'100%'}
            height={'100%'}
            borderRadius={3}
          >
            <CardMedia
              image={backgrrr}
              sx={{
                height: 480,
                backgroundSize: '100% 100%',
              }}
            >
              <Box paddingLeft={15} paddingTop={10} data-aos={isMd ? 'fade-right' : 'fade-up'}>
                <Box marginBottom={2}>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Дижит платформ 2022 оны 1-р сарын 20нд нээлтээ хийнэ.
                    {/*Leading Digital Transformation*/}
                    {/*<br/>*/}
                    {/*into a{' '}*/}
                    {/*<Typography*/}
                    {/*  color={'primary'}*/}
                    {/*  component={'span'}*/}
                    {/*  variant={'inherit'}*/}
                    {/*>*/}
                    {/*  <Typed*/}
                    {/*    strings={['Startup . . .', 'Future . . .', 'Success . . .']}*/}
                    {/*    typeSpeed={80}*/}
                    {/*    loop={true}*/}
                    {/*  />*/}
                    {/*</Typography>*/}
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  {
                    <Typography
                      variant="h8"
                      component="p"
                      color="whitesmoke"
                      align="justify"
                      sx={{fontWeight: 400}}
                    >
                      Дижитал шийдэл, үйлчилгээний зах Дижит платформ.
                    </Typography>
                  }
                </Box>
                <Box
                  display="flex"
                  flexDirection={'column'}
                  justifyContent={'center'}
                  component={'form'}
                  noValidate
                  autoComplete="off"
                  sx={{
                    '& .MuiInputBase-input.MuiOutlinedInput-input': {
                      bgcolor: 'background.paper',
                    },
                  }}
                  width={570}
                  paddingTop={15}
                  fullWidth
                >
                  <Box
                    display="flex"
                    flexDirection={'row'}
                  >
                    <TextField
                      label={
                        <Typography
                          color='#f57c00'
                          component={'span'}
                          variant={'inherit'}
                        >
                          Мэдээлэл тогтмол авахыг хүсвэл мэйлээ үлдээнэ үү
                        </Typography>}
                      variant="standard"
                      name="mail"
                      fullWidth
                      onChange={(e) => setMail(e.target.value)}
                      sx={{input: {color: 'white'}}}
                    />
                    <Button
                      variant="contained"
                      color="#f57c00"
                      size="large"
                      onClick={handleSend}
                    >
                      Илгээх
                    </Button>
                  </Box>
                  <Collapse in={open}>
                    <Alert
                      severity={error ? 'warning' : 'success'}
                      action={<Button onClick={() => setOpen(false)}><FaWindowClose/></Button>}
                    >
                      {error ? 'Зөв имэйл хаяг оруулна уу' : 'Амжилттай илгээгдлээ'}
                    </Alert>
                  </Collapse>
                </Box>
              </Box>
            </CardMedia>
          </Box>
        </Box>
      </Slider>
    </Box>
  )
}

export default Headline
