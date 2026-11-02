import { useState } from "react"
import "./Contact.css"
import toast from "react-hot-toast";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "835e4be3-2688-4591-9aad-355c2734a182");

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        
        const data = await response.json();
        if(data.success){
            setResult("Success!");
            toast.success("Your message was sent!");
        } else {
            setResult("Error")
            toast.error("Your message could not be sent.");
        }
        } catch(error) {
            setResult("Error");
            toast.error("Unable to connect. Please try again.");
        }
    }

    return (
        <section id = "contact">
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Reach out to us!</p>

            <form id = "contact-form" onSubmit={onSubmit}>
                <p id = "form-message" role="status">{result}</p>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <p><label htmlFor="message">Message:</label></p>
                <p><textarea id="message" name="message" required></textarea></p>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;