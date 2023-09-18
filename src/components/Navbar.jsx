import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import headerImg from '../assets/logo.png'


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "Sobre",
      to: "/about"
    },
    {
        text: "Serviços",
        to: "/service"
      },
    {
        text: "Contato",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#77c8ee', 
        }}
        
        elevation={0}
        >
            <StyledToolbar>
                <Typography 
                variant="h6"
                component="h2"
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Ajuste os valores conforme necessário
                    display: 'flex',
                    alignItems: 'center', // Centralizar verticalmente
                    paddingRight: 10, // Adicionar espaço à direita
                }}
             
                

                >
                 
                 <img
                 src={headerImg}
                 alt="headerImg"
                 style={{ 
                     width: "15%", 
                     marginBottom: -10,
                     paddingRight: 5,
                     textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)', // Ajuste os valores conforme necessário
                 }}
                 />
                 
                    
               Vidraçaria Dalton
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;