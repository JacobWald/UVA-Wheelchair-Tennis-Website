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
        </>
    );
}