import {useRef} from "react"
import "../list/List.css"
import "./ActivityCard.css"

const ActivityCard = ({activity, image}) =>{
    const dialog = useRef(null)

    const openDetails = () =>{
        dialog.current.showModal()
    }

    const closeDetails = () =>{
        dialog.current.close()
    }

    return(
        <article className="listing-card activity-card">
            <button
                type="button"
                className="activity-image-button"
                onClick={openDetails}
                aria-label={"View details for " + activity.name}
            >
                <img src={image} alt={activity.name} />
            </button>
            <div className="listing-card-text">
                <h3>
                    <button
                        type="button"
                        className="activity-title-button"
                        onClick={openDetails}
                    >
                        {activity.name}
                    </button>
                </h3>

                <p>{activity.description}</p>

                <button
                    type="button"
                    className="activity-details-button"
                    onClick={openDetails}
                >
                    View Details
                </button>
            </div>

            <dialog
                ref={dialog}
                className="activity-dialog"
                aria-labelledby={"activity-title-" + activity._id}
            >
                <button
                    type="button"
                    className="activity-close"
                    onClick={closeDetails}
                >
                    Close
                </button>

                <img src={image} alt={activity.name} />
                <h2 id={"activity-title-" + activity._id}>
                    {activity.name}
                </h2>
                <p>{activity.description}</p>
                <a href={activity.link}>
                    Visit Website
                </a>
                
            </dialog>
        </article>
    )
}

export default ActivityCard