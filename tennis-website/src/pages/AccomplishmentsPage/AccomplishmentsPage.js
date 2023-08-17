import "./AccomplishmentsPage.css";
import { accomplishments } from '../../teamInfo/accomplishments';

export default function AccomplishmentsPage() {
    return (
        <>
            <div className='accomplishments-page'>
                <h1>Accomplishments Page</h1>
            </div>
                {accomplishments.map((accomplishment) => 
                    <div class="accomplishment">
                        <img src={accomplishment.image} alt="All American" />
                        <div class="accomplishment-details">
                            <h2 class="accomplishment-title">{accomplishment.name}</h2>
                            <p class="accomplishment-description">{accomplishment.description}</p>
                            {accomplishment.article ? 
                            <a href={accomplishment.article} className="article">
                                Read the article
                            </a>
                            :
                            null
                            }
                        </div>
                    </div>
                )}
        </>
    );
}