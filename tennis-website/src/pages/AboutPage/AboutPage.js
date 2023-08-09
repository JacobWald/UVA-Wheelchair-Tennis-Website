import "./AboutPage.css";
import { text } from "../../teamInfo/writing.js";

export default function AboutPage() {
    return (
        <>
            <div className='about-page'>
                <h1>About</h1>
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
            <div className='support'>
                <div className= 'support-title'>
                    <h1>Support The Team</h1>
                </div>
                <div className="links">
                    <div>
                        <a href="#" class="button-link">
                            <img src="./images/instagram.svg" alt="Instagram SVG" className="icon"/>
                            Instagram
                        </a>
                        <a href="#" class="button-link">
                            {/* <img src="./images/sabers.svg" alt="GoFundMe SVG" className="icon"/> */}
                            GoFundMe
                        </a>
                        <a href="#" class="button-link">
                            <img src="./images/mail.svg" alt="Mail SVG" className="icon"/>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}