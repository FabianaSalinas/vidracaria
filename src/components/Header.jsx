import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import { Carousel } from 'react-responsive-carousel';
//import headerImg from '../assets/imghome.png'

// Importe suas imagens do carrossel
import image1 from '../assets/capa3.png';
import image2 from '../assets/capa.png';
import image3 from '../assets/capa2.png';
import image4 from '../assets/capa4.png';

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#77c8ee',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                    Soluções transparentes para a sua vida.
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    Transformando sonhos em realidade, nossa vidraçaria oferece soluções elegantes e sob medida para dar vida e luz ao seu espaço.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        buy now
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore
                    </Button>
                </Box>
            </BoxText>

            <Box
        sx={theme => ({
          [theme.breakpoints.down('md')]: {
            flex: '1',
            paddingTop: '30px',
            alignSelf: 'center',
          },
          [theme.breakpoints.up('md')]: {
            flex: '2',
            alignSelf: 'flex-end',
          },
        })}
      >
               <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
          {/* Slides do carrossel */}
          <div>
            <img src={image1} alt="Slide 1" style={{ maxWidth: '100%' }} />
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image3} alt="Slide 3" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image4} alt="Slide 3" style={{ maxWidth: '100%' }}/>
          </div>
          
        </Carousel>
            </Box>

        </CustomBox>
    )
}

export default Header