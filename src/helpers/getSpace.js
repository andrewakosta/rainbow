
const getSpace = (hight, width)=> {
    
    let spaceGrid = ''
    console.log(spaceGrid)
    //Width
    if(width <= 100){
        spaceGrid = 'level-1'
    }else if(width <= 200){
        spaceGrid = 'level-2'
    }else if (width <= 300){
        spaceGrid = 'level-3'
    }else {
        spaceGrid =  'level-4'
    }

    //Hight

    if(hight <= 50){
        spaceGrid += ' level-h-1'
    }else if (hight <= 100){
        spaceGrid += ' level-h-1'
    }else if (hight <= 150){
        spaceGrid += ' level-h-3'
    } 
    
    return spaceGrid

}

export default getSpace