import React from 'react'
import img from '../assets/lazy-load.gif'


function Loading() {
  return (
    <div>
        <div>
        <div style={{justifyContent: "center", display: "flex", height: "100%", width: "100%", paddingTop: "250px"}}>
            <img src={img} style={{width: "30rem"}} alt='loading' />
        </div>
    </div>
    </div>
  )
}

export default Loading