import React from 'react'

const TopPick_Card = (props) => {
    return (
        <div key= {props.myKey} class= "col-3 px-2" style={{display: props.displayStatus }}>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-8">
                        <img src={props.imgSrc} class="img-fluid rounded-start w-100 h-100" alt="..." />
                    </div>

                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <div class="card-body">
                            <h5 class="card-title">{props.myItem}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopPick_Card