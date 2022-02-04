import React from 'react'
import '../CSS/AboutSponsors.css'

function AboutSponsors({ slink, sname }) {
    return (
        <div className='aboutSponsor'>
            <img src={slink} alt='SponsorLogo'></img>
            <h4>{sname}</h4>
        </div>
    )
}

export default AboutSponsors
