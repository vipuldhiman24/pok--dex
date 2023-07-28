import React from 'react'
import './Heading.css';

function Heading() {
  return (
    <div> 
    <div className="head">
      <div className='logo-display'>
        <img src='https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png'  alt='pokemon logo' height={100} />
      </div>
      <div className='starter-pokemon'>
        <img src='https://www.pngkey.com/png/full/225-2259316_source-starter-pokemon.png' height={100}  />
      </div>
      <div>
      <div className="search">
            <input type="text" className="searchTerm" placeholder="search pokemon" />
      </div>
        </div>
      
     
    </div>
    </div>
  )
}

export default Heading