import React, { useEffect } from 'react'
import AboutCards from '../Components/AboutCards'
import AboutSponsors from '../Components/AboutSponsors'
import '../CSS/AboutUs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutUs() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='aboutUs'>
            <div className='navBar' >
                {/* Navbar */}
            </div>

            <div
                className='aboutHeader'
                data-aos="zoom-in-up"
                data-aos-duration='100'
                data-aos-easing='ease-in-sine'
                data-aos-anchor-placement="top-center">
                <h1>About Us</h1>
                <p>We are CREDENZ and this is our story</p>
            </div>

            <div className='aboutCards'>
                {/* About Cards */}
                <div className='card' data-aos='flip-left' data-aos-offset='50'><AboutCards></AboutCards></div>
                <div className='card' data-aos='flip-right' data-aos-offset='50'><AboutCards></AboutCards></div>
                <div className='card' data-aos='flip-left' data-aos-offset='50'><AboutCards></AboutCards></div>
            </div>

            <div className='aboutSponsors'>
                {/* About Sponsors */}
                <h1
                    data-aos="zoom-in"
                    data-aos-duration='100'
                    data-aos-easing='ease-in-sine'>
                    Sponsors
                </h1>
                <div className='aboutSpons'>
                    <div className='spons1 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons2 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons3 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons4 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons5 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons6 spons'
                        data-aos="zoom-in"
                        data-aos-duration='500'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons7 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons8 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons9 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                </div>


            </div>

            <div className='footer'>
                {/* Footer */}
            </div>
        </div>
    )
}

export default AboutUs
