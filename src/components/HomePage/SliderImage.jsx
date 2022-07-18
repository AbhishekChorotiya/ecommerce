import React from 'react'

const SliderImage = (props) => {
    return (
        <div class="carousel-item active">
            <img src={props.src} class="d-block carousel-img" alt={props.altText} />
            <div class="carousel-caption d-none d-md-block">
                <h5>{props.label}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default SliderImage