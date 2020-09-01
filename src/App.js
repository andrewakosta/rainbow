import React, {useState, useEffect} from 'react';


import NavBar from './components/NavBar';
import GridImages from './components/GridImages';


function App() {

  const [topic, setTopic] = useState('')
  const [images, setImages] = useState([])
  const [currentPage, changeCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5)

  useEffect(()=>{
    const getImages = async () => {
       const imagesForEachPage = 30
       const API_KEY = '18123217-dde29ebe6a2b30755f99cb38a'

       const url = `https://pixabay.com/api/?key=${API_KEY}&q=${topic}&per_page=${imagesForEachPage}&page=${currentPage}`
       const response = await fetch(url)
       const responseAsJSON = await response.json()

       setImages(responseAsJSON.hits)

       //Get total pages
       const getTotalPages = Math.ceil(response.totalHits / imagesForEachPage)
       setTotalPages(getTotalPages)
    }
    getImages() 
  },[topic, currentPage])
  //Set the nex page
  const handleNexPage = () => {
    const newCurrenPage = currentPage + 1
    if(newCurrenPage > totalPages){
      return 
    }
    changeCurrentPage(newCurrenPage)
  }
  //set previus page
  const handlePreviusPage = () =>{
    const newCurrenPage = currentPage -1 
    if(newCurrenPage===0){
      return
    }
    changeCurrentPage(newCurrenPage)
  }
  return (
    <div className="app">
      <NavBar setTopic={setTopic}/>
      <GridImages images={images}/>
      <div className='btn-container'>
        { currentPage === 1 ?
          null
        :
          <button
            className='btn-pagination'
            onClick={handlePreviusPage}
          >
            Previus 
          </button>  

        }
        {currentPage === totalPages ?
          null
        :
          <button
            className='btn-pagination'
            onClick={handleNexPage}
          >
           Next 
          </button>
        }
      </div>   
    </div>
  );
}

export default App;
