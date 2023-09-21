import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
          "A Vidraçaria Dalton é uma empresa localizada na zona leste de São Paulo, 
          atendendo a essa região e seus arredores há mais de 10 anos. 
          Nossa experiência e dedicação nos consolidaram como uma das referências 
          em serviços de vidros na região.

         Especializados em todos os tipos de envidraçamento, 
         nossos serviços abrangem uma ampla gama de necessidades. 
         somos especialistas na montagem, repaginação e manutenção de aquários,
         garantindo um ambiente seguro e atraente para suas espécies aquáticas.

         Na Vidraçaria Dalton, comprometemo-nos a fornecer aos nossos clientes produtos de alta qualidade 
         e serviços excepcionais. Nossos profissionais qualificados e experientes estão prontos para transformar
          suas ideias em realidade, seja na criação de um ambiente mais moderno e funcional ou na
           manutenção de aquários deslumbrantes.

          </Typography>
          {/* Adicione mais informações sobre a empresa aqui */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;