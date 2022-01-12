import React from 'react'
import {alpha, useTheme} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import {Avatar, CardContent, Grid, Typography} from '@material-ui/core'

import {FaAtom, FaCog, FaLightbulb} from 'react-icons/fa'

const Story = ({items}) => {
  const theme = useTheme()
  const assetAPIURL = 'https://api.digit.mn'
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs bgcolor="#f8f5f5" marginLeft={'3%'} marginRight={'3%'} marginBottom={8}>
          <Box
            component={Avatar}
            variant="square"
            width={60}
            height={60}
            marginLeft={20}
            // bgcolor={alpha(theme.palette.primary.main, 0.3)}
            style={{backgroundSize: '100% 100%'}}
          >
            <FaCog size="large"/>
          </Box>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom fontWeight="700" align="center">
              Алсын хараа
            </Typography>
            <Typography variant="body2" fontWeight="500" align="justify">
              МУ-ын Дижитал шийдлийг дэлхийд танилцуулах
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs bgcolor="#f8f5f5" marginTop={10} marginLeft={'3%'} marginRight={'3%'}>
          <Box
            component={Avatar}
            variant="square"
            width={60}
            height={60}
            marginLeft={20}
            bgcolor={alpha(theme.palette.primary.dark, 0.3)}
            style={{backgroundSize: '100% 100%'}}
          >
            <FaAtom size="large"/>
          </Box>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom fontWeight="700" align="center">
              Эрхэм зорилго
            </Typography>
            <Typography variant="body2" fontWeight="500" align="justify">
              МТ-ийн салбарын судалгаа, зөвлөх үйлчилгээг мэргэжлийн түвшинд хүргэх
            </Typography>
          </CardContent>
        </Grid>
        <Grid paddingTop={2} item xs bgcolor="#f8f5f5" marginLeft={3} marginRight={3} marginBottom={8}>
          <Box
            component={Avatar}
            variant="square"
            width={60}
            height={60}
            marginLeft={20}
            bgcolor={alpha(theme.palette.secondary.main, 0.3)}
          >
            <FaLightbulb size="large"/>
          </Box>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom fontWeight="700" align="center">
              Стратеги
            </Typography>
            <Typography variant="body2" fontWeight="500" align="justify">
              Дижитал боловсрол, ур чадварыг хэрэглэгчдэд түгээх
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Story
