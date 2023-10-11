import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../styles/style.css'

//import headerImg from '../assets/imghome.png'

// Importe suas imagens do carrossel
import image1 from '../assets/capaHome.png';
import image2 from '../assets/capaHome2.png';
import image3 from '../assets/capaHome3.png';
import image4 from '../assets/capaHome4.png';
import image5 from '../assets/capaHome5.png';
import image6 from '../assets/capaHome6.png';
import image7 from '../assets/capaHome7.png';
import image8 from '../assets/capaHome8.png';
import image9 from '../assets/capaHome9.png';
import image10 from '../assets/capaHome10.png';
import image11 from '../assets/capaHome11.png';
import image12 from '../assets/capaHome12.png';
//img fundo home


const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
     
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingTop: 420,
        zIndex:3,
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            
            
        },
    }));
    const CarouselContainer = styled(Box)({
        position: 'absolute', // Defina a posição como absoluta para que o carrossel se sobreponha ao plano de fundo
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        overflow: 'hidden',
      });
    

  return  (
        <CustomBox component='header'>
            
            <BoxText 
            component='section'
            
            >
                <Typography
                variant='h2'
                component= 'h1'
                className='textHome'
              
                >
                    Vidraçaria na grande São Paulo.
                </Typography>

                <Typography
                variant='p'
                component='p'
                className='subTextHome'
                sx={{
                    py: 3,
                }}
                >
                    Transformando sonhos em realidade, nossa vidraçaria oferece soluções elegantes e sob medida para dar vida e luz ao seu espaço.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/contact'}
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
                        Orçamento
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/contact'}
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
        <CarouselContainer>
               <Carousel 
               autoPlay={true} 
               interval={2000} 
               infiniteLoop={true}
               className="carousel">
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
            <img src={image4} alt="Slide 4" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image5} alt="Slide 5" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image6} alt="Slide 6" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image7} alt="Slide 7" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image8} alt="Slide 8" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image9} alt="Slide 9" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image10} alt="Slide 10" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image11} alt="Slide 11" style={{ maxWidth: '100%' }}/>
          </div>
          <div>
            <img src={image12} alt="Slide 12" style={{ maxWidth: '100%' }}/>
          </div>
          
        </Carousel>
        </CarouselContainer>
            </Box>

        </CustomBox>
    )
}

export default Header