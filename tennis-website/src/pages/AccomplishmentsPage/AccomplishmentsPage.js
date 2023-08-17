import "./AccomplishmentsPage.css";

export default function AccomplishmentsPage() {
    return (
        <>
            <div className='accomplishments-page'>
                <h1>Accomplishments Page</h1>
            </div>
            <div class="accomplishment">
                <img src="images/accomplishmentsPage/allAmerican.jpg" alt="All American" />
                <div class="accomplishment-details">
                    <h2 class="accomplishment-title">All American</h2>
                    <p class="accomplishment-description">Description of the All American accomplishment.</p>
                </div>
            </div>
    
            <div class="accomplishment">
                <img src="images/accomplishmentsPage/nationalTitle.jpg" alt="National Title" />
                <div class="accomplishment-details">
                    <h2 class="accomplishment-title">National Title</h2>
                    <p class="accomplishment-description">Description of the National Title accomplishment.</p>
                </div>
            </div>
    
            <div class="accomplishment">
                <img src="images/accomplishmentsPage/CDoublesFirst.jpg" alt="Rivercity Slam Doubles Victory" />
                <div class="accomplishment-details">
                    <h2 class="accomplishment-title">Rivercity Slam Doubles Victory</h2>
                    <p class="accomplishment-description">Description of the C Doubles First Place accomplishment.</p>
                </div>
            </div>
        </>
    );
}