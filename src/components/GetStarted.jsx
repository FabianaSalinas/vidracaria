import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/home.jpg';
import imgDetail2 from '../assets/reparo.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
        
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Elegância Transparente: Vidraçaria para Ambientes Sofisticados'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                   <li> Vidros de alta qualidade para espaços requintados.</li>
                   <li>Projetos personalizados que combinam beleza e funcionalidade.</li>
                   <li> Transformando sua casa em um oásis de transparência. </li>
                       
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Reparos e Manutenção: Vidraçaria Profissional para sua Tranquilidade'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    <li> Reparos rápidos e eficientes em caso de quebras.</li>
                    <li> Serviços de manutenção para prolongar a vida dos seus vidros.</li>
                    <li>  Sua vidraçaria confiável em todas as situações.</li>
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;