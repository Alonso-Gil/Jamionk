import React from 'react';

// Carrusel
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

const CarruselInicio = () => {
    return ( 
        <ImageGallery 
          items={images} 
          showThumbnails={false}
          showPlayButton={false}
          showBullets={true}
          autoPlay={true}
          slideDuration={600}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={true}
        />
     );
}
 
export default CarruselInicio;