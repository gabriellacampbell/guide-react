import {useState, useEffect} from "react"
import PageHero from "../../components/pagehero/PageHero";
import activitiesHero from "./images/activitiesHeroImg.png";
import ActivityCard from "../../components/activityCard/ActivityCard"
import AddActivity from "../../components/addActivity/AddActivity"
import "./Activities.css";

const serverURL = "https://thegamecockguide-backend-m1fk.onrender.com"

const Activities = () =>{
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        let cancelled = false

 const getActivities = async () =>{
            try {
                const response = await fetch(serverURL + "/api/activities")

                if(!response.ok){
                    throw new Error("Could not load activities")
                }

                const data = await response.json()

                if(!cancelled){
                    setActivities(data)
                }
            } catch(error) {
                if(!cancelled){
                    setError("Activities could not be loaded. Please try again later.")
                }
            } finally {
                if(!cancelled){
                    setLoading(false)
                }
            }
        }

        getActivities()

        return () =>{
            cancelled = true
        }
    }, [])

    const addActivity = (activity) =>{
        setActivities((previousActivities) => [
            ...previousActivities,
            activity
        ])
    }

    return(

        <main>
            <PageHero
                image={activitiesHero}
                title="Columbia, SC Activities"
                description="There’s always something to do in Columbia! 
                Whether you’re looking for a relaxing afternoon outdoors, 
                a fun night with friends, a new place to eat, 
                or something completely different, there’s plenty to explore both on and off campus. 
                Discover some of the best activities, hidden gems, 
                and favorite spots around the University of South Carolina and the Columbia area, 
                and find your next adventure!"
            />

            <section id="activities-list" aria-label="Activities">
                {loading && <p role="status">Loading activities...</p>}
                {error && <p role="alert">{error}</p>}

                <div className="activities-grid">
                    {activities.map((activity) => (
                        <ActivityCard
                            key={activity._id}
                            activity={activity}
                            image={serverURL + activity.image}
                        />
                    ))}
                </div>
            </section>
              {!loading && !error && (
                <AddActivity
                    serverURL={serverURL}
                    onAdd={addActivity}
                />
            )}
        </main>
    )
}

export default Activities