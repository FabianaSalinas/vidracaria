
import {  
    Box,
    Button,
    Stack,
    TextField,
    TextareaAutosize,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import emailjs from '@emailjs/browser'
import React, { useState } from 'react';


const Details = () => {
    const [email, setEmail] = useState(''); // Declare email como um estado
    const [phone, setPhone] = useState(''); // Declare phone como um estado


        
       
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const emailValue = data.get('email');
        const phoneValue = data.get('phone');
        console.log('Email:', emailValue);
        console.log('Phone:', phoneValue);
    
    setEmail(emailValue);
    setPhone(phoneValue);


        const templateParams = {
            from_email: email,
            from_phone: phone,
        }
        console.log('templateParams:', templateParams);
        emailjs.send('service_e4i3boy','template_rv49ngu',templateParams,'cZ_9OYH87Y9tEeJWx')
        .then((response) => {
          console.log("Email Enviado", response.status, response.text)
          setEmail ('')
          setPhone ('')
        }, (err) => {
         console.log ('Erro: ', err)
        })
    }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Faça seu orçamento'
                } 
            textAlign={'center'}
            />
            
            <Paragraph 
            text={
                'Por favor, envie-nos seu endereço de e-mail e número de telefone\
                 para que possamos fornecer um orçamento personalizado.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <TextareaAutosize
          margin='normal'
          required
          fullWidth
          name='message' // Nome adicionado para a mensagem
          label='Message'
          id='message'
          autoComplete='current-message'
          minRows={3} // Número mínimo de linhas
          placeholder='Digite sua mensagem...'
        />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
        </Stack>
    )
}

export default Details;