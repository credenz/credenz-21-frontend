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
            <div
                className='aboutHeader'
                data-aos="zoom-in-up"
                data-aos-duration='100'
                data-aos-easing='ease-in-sine'
                data-aos-anchor-placement="top-center">
                <h1>About Us</h1>
                <p>We are PISB and this is our story</p>
            </div>

            <div className='aboutCards'>
                {/* About Cards */}
                <div className='card1' data-aos='flip-left' data-aos-offset='50'><AboutCards eventname='CREDENZ' m1='What is CREDENZ ? ' m2='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. CLICK TO READ MORE' m3='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents. CLICK TO READ LESS' imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtIxlTB1lte4Hgj5CtlBD9uqH-YHRlCagkQ&usqp=CAU'></AboutCards></div>
                <div className='card1' data-aos='flip-right' data-aos-offset='50'><AboutCards eventname='CREDENZ' m1='What is CREDENZ ? ' m2='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. CLICK TO READ MORE' m3='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents. CLICK TO READ LESS' imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtIxlTB1lte4Hgj5CtlBD9uqH-YHRlCagkQ&usqp=CAU'></AboutCards></div>
                <div className='card1' data-aos='flip-left' data-aos-offset='100'><AboutCards eventname='CREDENZ' m1='What is CREDENZ ? ' m2='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. CLICK TO READ MORE' m3='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents. CLICK TO READ LESS' imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtIxlTB1lte4Hgj5CtlBD9uqH-YHRlCagkQ&usqp=CAU'></AboutCards></div>
            </div>

            <div className='aboutSponsors'>
                {/* About Sponsors */}
                <h1
                    data-aos="zoom-in"
                    data-aos-duration='100'
                    data-aos-easing='ease-in-sine'>
                    OUR ESTEEMED SPONSORS
                </h1>
                <div className='aboutSpons'>
                    <div className='spons1 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons2 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons3 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons4 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons5 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons6 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons7 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons8 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors></AboutSponsors>
                    </div>
                    <div className='spons9 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
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
