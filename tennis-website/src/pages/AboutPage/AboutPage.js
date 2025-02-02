import "./AboutPage.css";
import { text } from "../../teamInfo/writing.js";

export default function AboutPage() {
    return (
        <>
            <div className='about-page'>
                <h1>About Us</h1>
            </div>
            <div className="links">
                <a href="https://www.instagram.com/uva_wheelchair_tennis/" class="button-link" target="_blank" rel="noopener noreferrer">
                    <img src="./images/instagram.svg" alt="Instagram SVG" className="icon"/>
                    Instagram
                </a>
                <a href="https://www.givecampus.com/campaigns/21200/donations/new?designation=wheelchairtennisteamatuva" class="button-link" target="_blank" rel="noopener noreferrer">
                    {/* <img src="./images/sabers.svg" alt="GoFundMe SVG" className="icon"/> */}
                    Donations
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
                    <img src='/images/aboutPage/fullTeam2.jpg' alt='Joseph, Mason, Jacob, and Brian' />
                </div>
                <div className='right-text'>
                    <h1>The Need</h1>
                    <p className="info">{text.theNeed}</p>
                </div>
            </div>
            <div className='pedigree'>
                <div className='left-text'>
                    <h1>Pedigree</h1>
                    <p className="info">{text.pedigree}</p>
                </div>
                <div className='right-image'>
                    <img src='/images/aboutPage/ITARank.jpg' alt='Jacob, and Brian' />
                </div>
            </div>
        </>
    );
}