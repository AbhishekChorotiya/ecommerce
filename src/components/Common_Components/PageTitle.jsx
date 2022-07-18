import React from 'react'

const PageTitle = (props) => {
    return (
        <div class="block-heading pt-0 mb-2">
            <h2 class="text-info d-flex justify-content-center">{props.title}</h2>
            <p class= "d-flex justify-content-center">{props.desc}</p>
        </div>
    )
}

export default PageTitle