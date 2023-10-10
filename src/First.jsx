import React from 'react'

const First = ({ name, url }) => {
    // console.log("first")
  return (
    <div className='card'>
             <div>
            <h2 className='name'>{name}</h2>
            </div>
            <div>
            <div>
            <img src={url} alt="image"  className='img'/>
            </div>
            </div>
        </div>
  )
}

export default First
