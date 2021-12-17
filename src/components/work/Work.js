import React, {useState} from 'react'
import {useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Box, Divider, Grid, Typography} from '@material-ui/core'
import WorkImage from './work.jpg'
import TodoImage from './todo.jpg'
import lineImage from './vertical.jpg'

const Work = ({items}) => {
  const theme = useTheme()
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  // function replaceNewLine(str, id) {
  //   const newStr = str.replaceAll('\n', ' <br/> ')
  //   const array = newStr.split('<br/> ')
  //   return array.map((item, i) => {
  //     //return item === '' ? <><br/><br/></> : item
  //     return <>
  //       {
  //         id ? <>
  //           <CheckCircleIcon color={'primary'}/>
  //           {' ' + item}
  //         </> : item
  //       }
  //       <br/><br/>
  //     </>
  //   })
  // }

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5.5}>
          {
            <Box marginLeft={'10%'}>
              <br/>
              <br/>
              <br/>
              <Typography
                variant="h6"
                color="black"
                sx={{
                  fontWeight: 700,
                }}
              >
                Дижит платформын зорилго
              </Typography>
              <Divider style={{width: '51%', background: 'orange'}}/>
              <Divider style={{width: '51%', background: 'orange'}}/>
              <Divider style={{width: '51%', background: 'orange'}}/>
              <br/>
              <Box width={'100%'}>
                <Typography variant="body2" fontWeight="500" align="justify">
                  {/*{items && items[0] && items[0].platform && replaceNewLine(items[0].platform)}*/}
                  • Систем, Програм, Платформ, Мобайл аппуудын мэдээллийг хэрэглэгчдэд цаг алдалгүй хүргэх, нэг дороос
                  сонголт хийхэд туслах
                  <br/>
                  • Бизнесийн байгууллага, МТ-ийн компаниудын хооронд гүүр болж ажиллах
                  <br/>
                  • Хэрэглэгчийн сайжруулах саналыг авч чанартай бүтээгдэхүүн гаргахад туслах
                  <br/>
                  • Хэрэглэгчийн дижитал ур
                  чадварыг нэмэгдүүлэх мэдлэг, зөвлөгөөг хүргэх
                  <br/>
                  • Хөрөнгө оруулагч, ОУ-ын байгууллагыг МТ-ийн салбарын
                  судалгаагаар хангах
                  <br/>
                  • Гадаад, дотоодын чадварлаг инженерүүдийн мэдлэгийг бусдад түгээх
                  <br/>
                  • Гарааны компаниудад дижитал шийдлээ сурталчлахад туслах.'
                </Typography>
              </Box>
              <br/>
              <Box component={Typography} align="center"><img width={300} src={WorkImage}/> </Box>
            </Box>
          }

        </Grid>
        <Grid item xs={12} sm={1}>
          <Box marginTop={'80%'}>
            <img height={'80%'} src={lineImage}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <Box>
            <br/>
            <br/>
            <br/>
            <br/>
            <img width={'60%'} src={TodoImage}/>
            <br/>
            <br/>
            <br/>
            {
              <Box>
                <br/>
                <br/>
                <br/>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Редакцын бодлого
                </Typography>
                <Divider style={{width: '30%', background: 'orange'}}/>
                <Divider style={{width: '30%', background: 'orange'}}/>
                <Divider style={{width: '30%', background: 'orange'}}/>
                <br/>
                <Box width={'90%'}>
                  <Typography variant="body2" fontWeight="500" align="justify">
                    {/*{items && items[0] && items[0].editor && replaceNewLine(items[0].editor)}*/}
                    • МУ-ын хууль дүрэм журамд захирагдан Оюуны өмч, хүний эрхийн зохицуулалтын дагуу үйл ажиллагаагаа
                    явуулна.
                    <br/>
                    • ОУ-ын дижитал шийдлийг платформд оруулах боловч МУ-н МТ-ийн компаниудыг дэмжих бодлого
                    түлхүү баримтална.
                    <br/>
                    • Мэдээлэл, Зөвлөгөө, Контент бэлтгэхдээ үнэн зөв, ёс зүйтэй, нийлүүлэгчийн нэр
                    хүндэд онцгойлон халдахгүйгээр нийтлэлийг бэлтгэнэ хүргэнэ.
                    <br/>
                    • Өрсөлдөгч рүү хандсан хэт сөрөг сэтгэгдэл, үндэслэлгүй буруу үнэлгээг платформ руу оруулахгүй, үл ойлголцол, доромжлолоос сэргийлнэ.
                    <br/>
                    • Хэрэглэгчийн хувийн мэдээллийг зөвшөөрөлгүйгээр ашиглахгүй.
                  </Typography>
                </Box>
                <br/>
                <br/>
              </Box>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Work
