import React from 'react'
import './Body.css'
import pfp from '../image/pic.jpg'
function Body() {
  return (
    <div className='bmain' >
      <div className='body' >
        <div className='frame' >
          <h1>Monica Moon</h1>
          <h3>indie/Pop/Rock</h3>
          <img className='mpic' src={pfp}  width={300} />
          <h4 className='wname' >Women 20 year old</h4>
        </div>
      </div>
    </div>
  )
}

export default Body
