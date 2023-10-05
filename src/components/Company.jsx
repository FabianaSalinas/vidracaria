
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import "../styles/style.css"

// Importe as imagens que você deseja exibir no carrossel

import companyImage3 from '../assets/logo1.png';

const Company = () => {
  return (
    <div className="about-container">
      <Grid className='box' container spacing={1}>
        <Grid item xs={8} sm={4} className="about-image-container">
         
              <img src={companyImage3} alt="Company 3" />
            
        </Grid>
        <Grid item xs={8} sm={4} className="about-text-container">
        <Typography variant="h4" gutterBottom style={{ paddingTop: '100px' , textAlign: 'center', paddingRight: '100px'}}>
            Sobre Nossa Empresa
          </Typography>
          <Typography variant="body1" >
          "A Vidraçaria Dalton, localizada na zona leste de São Paulo, atende essa região e arredores por mais de 10 anos. 
           Com experiência e dedicação, somos referência em serviços de vidros na área.
           Especializados em envidraçamento de todos os tipos, oferecemos serviços abrangentes, 
           incluindo montagem, renovação e manutenção de aquários, assegurando ambientes seguros e atraentes para espécies aquáticas
           Na Vidraçaria Dalton, comprometemo-nos a fornecer produtos de alta qualidade e serviços excepcionais. 
           Nossa equipe qualificada está pronta para transformar suas ideias em realidade, seja na criação de ambientes modernos e funcionais ou na manutenção de aquários deslumbrantes.

          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;



/*import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import "../styles/style.css"

// Importe a imagem da sua empresa ou use um placeholder
import companyImage from '../assets/logo.png';

const Company = () => {
  return (
    <div className="about-container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className="about-image-container">
          <img src={companyImage} alt="Company" className="about-image" />
        </Grid>
        <Grid item xs={12} sm={6} className="about-text-container">
          <Typography variant="h4" gutterBottom style={{ paddingTop: '100px' , textAlign: 'center', paddingRight: '100px'}}>
            Sobre Nossa Empresa
          </Typography>
          <Typography variant="body1" >
          "A Vidraçaria Dalton, localizada na zona leste de São Paulo, atende essa região e arredores por mais de 10 anos. 
           Com experiência e dedicação, somos referência em serviços de vidros na área.
           Especializados em envidraçamento de todos os tipos, oferecemos serviços abrangentes, 
           incluindo montagem, renovação e manutenção de aquários, assegurando ambientes seguros e atraentes para espécies aquáticas
           Na Vidraçaria Dalton, comprometemo-nos a fornecer produtos de alta qualidade e serviços excepcionais. 
           Nossa equipe qualificada está pronta para transformar suas ideias em realidade, seja na criação de ambientes modernos e funcionais ou na manutenção de aquários deslumbrantes.

          </Typography>
          {/* Adicione mais informações sobre a empresa aqui 
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;*/