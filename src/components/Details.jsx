
import {  
    Box,
    Button,
    Stack,
    TextField,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import emailjs from '@emailjs/browser'
import React, { useState } from 'react';


const Details = () => {
    const [name, setName] = useState(''); // Declare email como um estado
    const [phone, setPhone] = useState(''); // Declare phone como um estado
    const [message, setMessage] = useState('');


        
       
    

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name  === '' || phone ==='' || message === ''){
            alert ('preencha todos os campos')
            return;
        }

        const data = new FormData(event.currentTarget);
        const nameValue = data.get('name');
        const phoneValue = data.get('phone');
        const messageValue = data.get('message');
        console.log('Name:', nameValue);
        console.log('Phone:', phoneValue);
        console.log('message:', messageValue);
    
    setName(nameValue);
    setPhone(phoneValue);
    setMessage(messageValue);


        const templateParams = {
            from_email: name,
            from_phone: phone,
            from_message: message,
        }
        console.log('templateParams:', templateParams);
        emailjs.send('service_e4i3boy','template_rv49ngu',templateParams,'cZ_9OYH87Y9tEeJWx')
        .then((response) => {
          console.log("Email Enviado", response.status, response.text)
          setName ('')
          setPhone ('')
          setMessage ('')
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
                'Por favor, envie-nos os seus dados e qual serviço deseja realizar\
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
                    id="name"
                    label="Nome"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setName (e.target.value)}
                    value={name}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Numero de telefone"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                    onChange={(e) => setPhone (e.target.value)}
                    value={phone}
                />
                <TextField
                   margin="normal"
                   required
                   fullWidth
                   multiline  // Esta linha adiciona a funcionalidade de área de texto
                   rows={4}   // Define o número de linhas visíveis na área de texto
                   name="message"   // Nomeie o campo de acordo com sua necessidade
                   label="Mensagem" // Rótulo da área de texto
                   id="message"
                   onChange={(e) => setMessage(e.target.value)} // Defina o estado correspondente para a mensagem
                   value={message} // Use o valor do estado para controlar a área de texto
/>
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                value="enviar"
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