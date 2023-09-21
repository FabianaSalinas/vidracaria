import React from 'react'
import { 
  Box, 
  Stack, 
  styled,
  Button, 
  
  
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

import '../styles/style.css'

import imgMen from '../assets/men.png';
import fundoAzul from '../assets/fundoAzul.png';




const Information = () => {


    const StackColumn = styled(Stack) (() => ({
      
      display:'flex',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column', // Altere a direção para uma coluna
      gap: 8,
      textAlign: 'center',
      position: 'relative',
     
      
    }));
  
    const BoxRow = styled(Box) (({ theme }) => ({
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 0,
      backgroundImage: `url(${fundoAzul})`,
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: 30,
      },
      
      
    }));

    const imgStyle = {
       
      height: 'auto', 
      float: 'right',
      
    }; 

    
  const textStyle = {
    fontSize: '40px', // Ajuste o tamanho do texto aqui
    color: 'white',
    flex: 1, // Expande o texto para preencher o espaço disponível
    marginRight: '20px',
    marginTop: '70px',
    
  };

  const buttonStyle = {
    fontSize: '16px', // Ajuste o tamanho do texto dos botões aqui
    padding: '16px ',
    width: '250px',
    marginLeft:'30px',
    marginTop: '30px',
    

  };

  const buttonContainerStyle = {
    paddingBottom: '100px' , 
    flexDirection:'row'   
  };

  

  
    return (
      <BoxRow
        component="information"
        sx={{
          py: 4,
          px: 2,
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >
            <StackColumn>
        <h1 style={textStyle}>Dúvidas ou Orçamento? Estamos Aqui para Ajudar! Entre em Contato Conosco.</h1>
        <div style={buttonContainerStyle}>
          <Button
           className='botaoWhats'
           variant="contained" 
           color="primary" 
           style={buttonStyle}
           onClick={() => {
        // Adicione aqui a lógica para abrir o link do WhatsApp
        window.location.href = 'https://api.whatsapp.com/send?phone=11981487235';
      }}
           >
           <WhatsAppIcon style={{ marginRight: '10px' }} /> Whatsapp
          </Button>
          <Button 
          className='botaoOrcamento' 
          variant="contained" 
          color="primary" 
          style={buttonStyle}
          onClick={() => {
        
            window.location.href = '/contact'; 
          }}>
          <SendIcon style={{ marginRight: '10px' }} />Envie mensagem
          </Button>
        </div>
      </StackColumn>
       
          <img 
            src={imgMen}
            alt="Homem Apontando"
            className="men"
            style={imgStyle}
          />
        
      </BoxRow>
    );
  };
  
  export default Information;