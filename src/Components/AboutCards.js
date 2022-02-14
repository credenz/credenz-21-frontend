import React, { useState, useEffect } from "react";
import "../CSS/AboutCards.css";
import CredenzLogo from "../images/credenzlive2.0_1.png";
import PISBLogo from "../images/logopisb.png";
import PING from "../images/ping.png";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutCards() {
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className="aboutCard">
            <div
                className="c1 c"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
            >
                <img src={CredenzLogo} alt="Branchlogo"></img>
                <div className="aboutCard-nam-messe">
                    <h2>CREDENZ</h2>
                    <div
                        className="aboutCard-messege"
                    >
                        Credenz is the annual technical festival organised by the PICT
                        IEEE Student Branch. Started in 2004, with a view to elicit the
                        best out of each and everyone, it has grown to become one of the
                        finest technical events in Pune. Credenz aims not only to infuse a
                        competitive spirit among participants but also widen their
                        horizons in the ever-changing field of technology via myriad
                        seminars and workshops.Participants get a chance to discover their
                        talents and thrive in numerous events like Clash, B Plan,
                        RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and
                        DataWiz. This is a unique chance for the students to go beyond the
                        traditional spheres of academics and make the most of their
                        potential. This spirit of learning and discovery has inspired the
                        PICT IEEE Student Branch to present Credenz, a podium for you to
                        nurture and cultivate your talents.<br></br>
                    </div>
                </div>
            </div>

            <div
                className="c2 c"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
            >
                <img src={PISBLogo} alt="Branchlogo"></img>
                <div className="aboutCard-nam-messe">
                    <h2>PICT IEEE Student Branch</h2>
                    <div
                        className="aboutCard-messege"

                    >
                        PICT IEEE Student Branch (PISB) was established in the year 1988
                        with an aim of inculcating a sense of technical awareness amongst
                        its student members. PISB aims to escalate the knowledge and
                        trends in the diverse fields of technologies amongst its members.
                        PISB upholds two major events every year - Credenz and Credenz
                        Tech Dayz with the first one being conducted in odd semester and
                        the latter one in even semester. PISB is also marked by its Women
                        in Engineering (WIE) chapter, an initiative for the empowerment of
                        women.<br></br>

                    </div>
                </div>
            </div>

            <div
                className="c3 c"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
            >
                <img src={PING} alt="PING LOGO"></img>
                <div className="aboutCard-nam-messe">
                    <h2>P.I.N.G.</h2>
                    <div
                        className="aboutCard-messege"

                    >
                        P.I.N.G. (PICT IEEE Newsletter Group) is the annual technical
                        magazine published by the student members of PICT IEEE Student
                        Branch (PISB). P.I.N.G. serves as a platform for individuals to
                        portray their technical ingenuity. It highlights articles on
                        cutting-edge technologies from technocrats all around the globe.
                        It also features interviews of distinguished personalities in
                        various technical domains. P.I.N.G. aims at keeping its readers
                        updated on recent developments in technology and helps them
                        extrapolate their perceptions to contemporary ideas of
                        modernisation. With the imminent Issue 16.1, be ready to get
                        P.I.N.G.'d!<br></br>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCards;
