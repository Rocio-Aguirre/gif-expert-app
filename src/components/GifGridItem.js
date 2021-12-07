import React from 'react'
import 'animate.css';

const GifGridItem = ({img: {url, id, title}}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p key={id}> {title} </p> 
        </div>
    )
}

export default GifGridItem
