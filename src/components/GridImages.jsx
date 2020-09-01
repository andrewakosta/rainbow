import React from 'react'

import Image from './Image'
const GridImages = ({images}) => {
    return ( 
        <div className="grid-images">
            {images.map(image => (
                <Image
                    key={image.id}
                    image={image}
                />   
            ))}
        </div>
     );
}
 
export default GridImages;