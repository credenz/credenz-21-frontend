import React, { useState } from 'react'
import '../CSS/AboutCards.css'

function AboutCards() {

    const [massege, setMassege] = useState('What is CREDENZ ? ')
    const [flag, setFlag] = useState(false)

    return (
        <div className='aboutCard' >
            <h2>CREDENZ</h2>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtIxlTB1lte4Hgj5CtlBD9uqH-YHRlCagkQ&usqp=CAU' alt='Branchlogo'></img>
            {flag ? (
                <div className='aboutCard-massege' onClick={() => { setMassege('Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents. CLICK TO READ LESS'); setFlag(false) }} >{massege}</div>
            ) : (
                <div className='aboutCard-massege' onClick={() => { setMassege('Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. CLICK TO READ MORE'); setFlag(true) }} >{massege}</div>
            )}

        </div>
    )
}

export default AboutCards
