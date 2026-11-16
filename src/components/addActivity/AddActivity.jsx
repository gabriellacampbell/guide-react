import {useState} from "react"
import Joi from "joi"
import "./AddActivity.css"

const activitySchema = Joi.object({
    name: Joi.string().trim().min(3).max(80).required(),
    description: Joi.string().trim().min(10).max(1000).required(),
    link: Joi.string().trim().uri({
        scheme: ["http", "https"]
    }).max(2048).required()
}).required()

const AddActivity = ({serverURL, onAdd}) =>{

    const [result, setResult] = useState("")
    const [saving, setSaving] = useState(false)

    const onSubmit = async (event) =>{
        event.preventDefault()

        if(saving){
            return
        }
        setResult("")

        const form = event.currentTarget
        const formData = new FormData(form)

        const validation = activitySchema.validate({
            name: formData.get("name"),
            description: formData.get("description"),
            link: formData.get("link")
        })

        if(validation.error){
            setResult(validation.error.details[0].message)
            return
        }

        const image = formData.get("img")

        if(!image || !image.name){
            setResult("Please choose an activity image.")
            return
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ]

        if(!allowedTypes.includes(image.type)){
            setResult("Please choose a JPG, PNG, or WebP image.")
            return
        }

        if(image.size > 5 * 1024 * 1024){
            setResult("Your image must be 5 MB or smaller.")
            return
        }

        formData.set("name", validation.value.name)
        formData.set("description", validation.value.description)
        formData.set("link", validation.value.link)

        setSaving(true)
        setResult("Adding your activity...")

        try {
            const response = await fetch(serverURL + "/api/activities", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if(!response.ok){
                setResult(data.message || "The activity could not be added.")
                return
            }

            onAdd(data)
            form.reset()
            setResult("Your activity was added! Find it in the list below.")
        } catch(error) {
            setResult("Unable to connect. Please try again.")
        } finally {
            setSaving(false)
        }
    }

    return(
        <section className="add-activity">
            <div className="add-activity-heading">
                <h2>Share Your Activity</h2>
                <p>
                    Found something your fellow Gamecocks should try?
                    Add an activity to the guide.
                </p>
            </div>

            <form onSubmit={onSubmit} noValidate>
                <fieldset disabled={saving}>
                    <div className="add-activity-grid">
                        <div>
                            <label htmlFor="activity-name">
                                Activity Name
                            </label>
                            <input
                                type="text"
                                id="activity-name"
                                name="name"
                                required
                                aria-describedby="activity-name-help"
                            />
                            <small id="activity-name-help">
                                3–80 characters
                            </small>
                        </div>

                        <div>
                            <label htmlFor="activity-link"> Website </label>
                            <input
                                type="text"
                                inputMode="url"
                                id="activity-link"
                                name="link"
                                placeholder="https://"
                                required
                                aria-describedby="activity-link-help"
                            />
                            <small id="activity-link-help"> A full HTTP or HTTPS address</small>
                        </div>

                        <div className="add-activity-full">
                            <label htmlFor="activity-description">Description</label>
                            <textarea
                                id="activity-description"
                                name="description"
                                required
                                aria-describedby="activity-description-help"
                            ></textarea>
                            <small id="activity-description-help"> 10–1,000 characters</small>
                        </div>

                        <div className="add-activity-full">
                            <label htmlFor="activity-image"> Activity Picture</label>
                            <input
                                type="file"
                                id="activity-image"
                                name="img"
                                accept="image/jpeg,image/png,image/webp"
                                required
                                aria-describedby="activity-image-help"
                            />
                            <small id="activity-image-help"> JPG, PNG, or WebP. Maximum 5 MB.  </small>
                        </div>
                    </div>

                    <button type="submit">
                        {saving ? "Adding..." : "Add Activity"}
                    </button>
                </fieldset>

                <p className="add-activity-result" role="status">
                    {result}
                </p>
            </form>
        </section>
    )
}

export default AddActivity