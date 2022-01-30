import React, { useEffect, useState } from 'react'
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
                <div
                    className='card1' data-aos='flip-left' data-aos-offset='50'>
                    <AboutCards
                        eventname='CREDENZ'
                        m2="Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune."
                        readm="CLICK TO READ MORE"
                        m3='Credenz is the annual technical festival organised by the PICT IEEE Student Branch. Started in 2004, with a view to elicit the best out of each and everyone, it has grown to become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive spirit among participants but also widen their horizons in the ever-changing field of technology via myriad seminars and workshops.Participants get a chance to discover their talents and thrive in numerous events like Clash, B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a unique chance for the students to go beyond the traditional spheres of academics and make the most of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch to present Credenz, a podium for you to nurture and cultivate your talents.'
                        readl=' CLICK TO READ LESS'
                        imgurl='https://play-lh.googleusercontent.com/kBuWjVO4yB_Ha2j5IzWW7rmLixtTMU2mDGuP39eNvgPfiy_leOdoPyXEyiECx01e0Yw'>
                    </AboutCards></div>
                <div
                    className='card1' data-aos='flip-right' data-aos-offset='50'>
                    <AboutCards
                        eventname='PISB'
                        m2='PICT IEEE Student Branch (PISB) was established in the year 1988 with an aim of inculcating a sense of technical awareness amongst its student members. PISB aims to escalate the knowledge and trends in the diverse fields of technologies amongst its members.'
                        readm=' CLICK TO READ MORE'
                        m3='PICT IEEE Student Branch (PISB) was established in the year 1988 with an aim of inculcating a sense of technical awareness amongst its student members. PISB aims to escalate the knowledge and trends in the diverse fields of technologies amongst its members. PISB upholds two major events every year - Credenz and Credenz Tech Dayz with the first one being conducted in odd semester and the latter one in even semester. PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for the empowerment of women.'
                        readl=' CLICK TO READ LESS'
                        imgurl="https://credenz.in/static/media/logopisb.1e08728f.png">
                    </AboutCards></div>
                <div
                    className='card1' data-aos='flip-left' data-aos-offset='100'>
                    <AboutCards
                        eventname='P.I.N.G'
                        m2='P.I.N.G. (PICT IEEE Newsletter Group) is the annual technical magazine published by the student members of PICT IEEE Student Branch (PISB). P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe.'
                        readm=' CLICK TO READ MORE'
                        m3="P.I.N.G. (PICT IEEE Newsletter Group) is the annual technical magazine published by the student members of PICT IEEE Student Branch (PISB). P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe. It also features interviews of distinguished personalities in various technical domains. P.I.N.G. aims at keeping its readers updated on recent developments in technology and helps them extrapolate their perceptions to contemporary ideas of modernisation. With the imminent Issue 16.1, be ready to get P.I.N.G.'d!"
                        readl=' CLICK TO READ LESS'
                        imgurl='https://credenz-20.netlify.app/static/media/15.1.35d683e9.png'>
                    </AboutCards></div>
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
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
                    </div>
                    <div className='spons2 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">

                        </AboutSponsors>
                    </div>
                    <div className='spons3 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">

                        </AboutSponsors>
                    </div>
                    <div className='spons4 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
                    </div>
                    <div className='spons5 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
                    </div>
                    <div className='spons6 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
                    </div>
                    <div className='spons7 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">

                        </AboutSponsors>
                    </div>
                    <div className='spons8 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
                    </div>
                    <div className='spons9 spons'
                        data-aos="zoom-in"
                        data-aos-duration='800'
                        data-aos-easing='ease-in-sine'
                        data-aos-offset='50'>
                        <AboutSponsors
                            slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
                            sname="sponsorname">
                        </AboutSponsors>
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
