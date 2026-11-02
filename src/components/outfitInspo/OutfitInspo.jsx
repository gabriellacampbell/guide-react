import "./OutfitInspo.css"
import { useState } from "react"

const OutfitInspo = ({title, images, alt}) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const nextImage = () =>{
        if(currentImage === images.length - 1){
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }
    const previousImage = () =>{
        if(currentImage === 0){
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }
    
    return(
        
        <section className="outfit-inspo">
            <h3>{title}</h3>
            <div className="outfit-slideshow">

                <img src={images[currentImage]} alt={alt} />

                <button
                    type="button"
                    className="outfit-arrow outfit-arrow-left"
                    onClick={previousImage}
                    aria-label="Previous outfit"
                    data-tooltip-id="outfit-help"
                    data-tooltip-content="Previous outfit"
                >
                    &#10094;
                </button>
                <button
                    type="button"
                    className="outfit-arrow outfit-arrow-right"
                    onClick={nextImage}
                    aria-label="Next outfit"
                    data-tooltip-id="outfit-help"
                    data-tooltip-content="Next outfit"
                >
                    &#10095;
                </button>

            </div>

        </section>
    )
}

export default OutfitInspo