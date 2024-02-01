import React from 'react'
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// mui
import { 
    Box,
    Stack,
} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// components
import Title from './Title'
import Paragraph from './Paragraph'






const Gallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    



    const itemData = [
        {
          img: require('../assets/gallery1.jpg'),
          title: 'Breakfast',
        },
        {
          img: require('../assets/gallery2.jpg'),
          title: 'Burger',
        },
        {
          img: require('../assets/gallery3.jpg'),
          title: 'Camera',
        },
        {
          img: require('../assets/gallery4.jpg'),
          title: 'Coffee',
        },
        {
          img: require('../assets/gallery5.jpg'),
          title: 'Hats',
        },
        {
          img: require('../assets/gallery6.jpg'),
          title: 'Honey',
        },
        {
          img: require('../assets/gallery7.jpg'),
          title: 'Basketball',
        },
        {
          img: require('../assets/gallery8.jpg'),
          title: 'Fern',
        },
        {
          img: require('../assets/gallery9.jpg'),
          title: 'Mushrooms',
        },
        {
          img: require('../assets/gallery10.jpg'),
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];
  
 

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={'Nossos serviços'}
                textAlign={'center'}
                />
                
                <Paragraph 
                text={
                    'Nosso histórico é marcado por uma extensa\
                     lista de serviços executados com excepcional \
                     excelência ao longo do tempo.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
          
            <ImageList
        sx={{
          width: isSmallScreen ? '100%' : '70%',
          height: 'auto',
          marginBottom: isSmallScreen ? 3 : 0,
        }}
        cols={isSmallScreen ? 2 : 4}
        rowHeight={isSmallScreen ? 200 : 350}
      >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          style={{ borderRadius: '8px' }}
        />
        </ImageListItem>
      ))}
    </ImageList>
          
        </Stack>
        
    )
}

export default Gallery

/*

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const [currentIndex, setCurrentIndex] = useState();


   const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }



    const imageData = [
        {
            alt: 'image1',
            url: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg'
        },
        {
            alt: 'image2',
            url: 'https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg'
        },
        {
            alt: "image3",
            url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg'
        },
        {
            alt: "image4",
            url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg'
        },
        {
            alt: "image5",
            url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg'
        },
    ];
    
    <Box sx={{ 
    maxWidth: 700,
    width: '100%',
}}>
    <Carousel
    centerSlidePercentage={40}
    thumbWidth={180}
    dynamicHeight={false}
    centerMode={false}
    showArrows={false}
    autoPlay={false}
    infiniteLoop={true}
    selectedItem={imageData[currentIndex]}
    onChange={handleChange}
    className="carousel-container"
    >
    {renderSlides}
    </Carousel>
</Box>*/