import React from 'react'
// @ts-ignore

import '../stylesheets/witness.css'

function Witness({ img, name, rank, company, description }) {
  return (
    <div className='witness_container'>
      <img
        className='witness_img'
        alt="witness img"
        src={img}
      />
      <div className='witness_text_container'>
        <p className='witness_name'>
          {name}
        </p>
        <p className='witness_rank'>
          {rank} <b>{company}</b>
        </p>
        <p className='witness_text'>
          "{description}"
        </p>

      </div>
    </div>
  )
}

export default Witness