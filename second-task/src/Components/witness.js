import React from 'react'
import witness1 from '../img/witness1.png'
import '../stylesheets/witness.css'
function Witness() {
  return (
    <div className='witness_container'>
      <img
        className='witness_img'
        alt="witness img"
        src={witness1}
      />
      <div className='witness_text_container'>
        <p className='witness_name'>
          Shawn Wang in Singapore
        </p>
        <p className='witness_rank'>
          Software Engineer at <b>Amazon</b>
        </p>
        <p className='witness_text'>
          "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <b>freeCodeCamp changed my life."</b>
        </p>

      </div>
    </div>
  )
}

export default Witness