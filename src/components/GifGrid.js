import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
//{ useEffect, useState } from 'react'
//import { getGifts } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

    /*const [images, setImages] = useState([]);

    

    useEffect(() => {
        getGifts(category)
            .then(setImages);

    }, [category])
   */ 
  
    const {data: images, loading} = useFetchGifs(category);

    //console.log(images, loading)

    return (
        <>
        { loading && <p className="animate__animated animate__flash">Loading...</p> }
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        <div className="card-grid">
                {
                    images.map(img => ( 
                        <GifGridItem img={img}/> 
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
