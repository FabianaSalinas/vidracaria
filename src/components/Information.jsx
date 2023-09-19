
import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  
} from '@mui/material'

import imgMen from '../assets/men.png';
import fundoAzul from '../assets/fundoAzul.png'




const Information = () => {

    const StackColumn = styled(Stack) (() => ({
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
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
      width: '40%', 
      height: 'auto', 
      paddingLeft: '70%',
      
      
      
    }; ;;;
   
  
    return (
      
      <BoxRow 
      component = 'information'
      sx={{
        py: 4,
        px: 2,
      }}
      >
        <StackColumn>
     
<body>
    <div class="container">
        <img src={imgMen} alt="Homem Apontando" class="imagem-direita" style={imgStyle} />
    </div>
</body>
        </StackColumn>
      </BoxRow>
    )
  }

  export default Information