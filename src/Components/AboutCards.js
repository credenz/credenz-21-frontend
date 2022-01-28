import React, { useState } from 'react'
import '../CSS/AboutCards.css'

function AboutCards({ m2, m3, imgurl, eventname, readm, readl }) {

    const [massege, setMassege] = useState(m2)
    const [read, setRead] = useState(readm)
    const [flag, setFlag] = useState(true)

    return (
        <div className='aboutCard' >
            <img src={imgurl} alt='Branchlogo'></img>
            <h2>{eventname}</h2>
            {flag ? (
                <div className='aboutCard-messege' onClick={() => { setMassege(m3); setFlag(false); setRead(readl) }} >{massege}<br></br><strong className='readbutton'>{read}</strong></div>
            ) : (
                <div className='aboutCard-messege' onClick={() => { setMassege(m2); setFlag(true); setRead(readm); }} >{massege}<br></br><strong className='readbutton'>{read}</strong></div>
            )}

        </div>
    )
}

export default AboutCards
