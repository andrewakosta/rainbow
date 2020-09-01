import React from 'react'
import getSpace from '../helpers/getSpace'
import GridImages from './GridImages';
const Image = ({image}) => {
    const spaceToFill = getSpace(image.previewHeight, image.previewWidth)
    return ( 
        <div className={spaceToFill + ' image-card'}>
            <img 
                src={image.previewURL} alt={image.title}
            />
            <div className="overflay">
                <i class="icons far fa-comment">{' ' + image.comments}</i>
                <i class="icons fas fa-heart">{' ' + image.likes}</i>
            </div>
        </div>
     );
}
 
export default Image;   