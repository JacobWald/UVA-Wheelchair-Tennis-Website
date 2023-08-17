import "./AboutPage.css";
import { text } from "../../teamInfo/writing.js";

export default function AboutPage() {
    return (
        <>
            <div className='about-page'>
                <h1>About</h1>
            </div>
            <div className="links">
                <a href="https://www.instagram.com/uva_wheelchair_tennis/" class="button-link">
                    <img src="./images/instagram.svg" alt="Instagram SVG" className="icon"/>
                    Instagram
                </a>
                <a href="https://www.gofundme.com/f/the-wheelchair-tennis-team-at-uva?utm_medium=referral&utm_source=widget&utm_campaign=p_cp%2Bshare-sheet" class="button-link">
                    {/* <img src="./images/sabers.svg" alt="GoFundMe SVG" className="icon"/> */}
                    GoFundMe
                </a>
                <a href="mailto:vug5ue@virginia.edu" class="button-link">
                    <img src="./images/mail.svg" alt="Mail SVG" className="icon" style={{ filter: "invert(1)" }}/>
                    Contact Us
                </a>
            </div>
            <div className='our-story'>
                <div className='left-text'>
                    <h1>Our Story</h1>
                    <p className="info">{text.ourStory}</p>
                </div>
                <div className='right-image'>
                    <img src='/images/aboutPage/masonCat.jpg' alt='Mason and Cat' />
                </div>
            </div>
            <div className='the-need'>
                <div className='left-image'>
                    <img src='/images/aboutPage/josephMasonJacobRyan.jpg' alt='Joseph, Mason, Jacob, and Ryan' />
                </div>
                <div className='right-text'>
                    <h1>The Need</h1>
                    <p className="info">{text.theNeed}</p>
                </div>
            </div>
        </>
    );
}