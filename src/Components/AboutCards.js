import React, { useState } from 'react'
import '../CSS/AboutCards.css'

function AboutCards({ m1, m2, m3, imgurl, eventname }) {

    const [massege, setMassege] = useState(m1)
    const [flag, setFlag] = useState(false)

    return (
        <div className='aboutCard' >
            <img src={imgurl} alt='Branchlogo'></img>
            <h2>{eventname}</h2>
            {flag ? (
                <div className='aboutCard-massege' onClick={() => { setMassege(m3); setFlag(false) }} >{massege}</div>
            ) : (
                <div className='aboutCard-massege' onClick={() => { setMassege(m2); setFlag(true) }} >{massege}</div>
            )}

        </div>
    )
}

export default AboutCards
