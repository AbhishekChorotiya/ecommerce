import React from 'react'
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const FlashCard = (props) => {
    return (
        // <form action="/addCart" method='post'>
            <div class={props.cardClass} style={{ width: "18rem", display: props.displayStatus }}>

                <img class="w-100" src={props.Imgsrc} alt={props.altText} />

                <div class="card-body p-2">
                    <h5 class={"card-title text-dark d-flex justify-content-center"}>{props.title}</h5>
                    <Rating name="read-only" value={4} readOnly />

                    <div class="d-flex justify-content-between align-items-center">

                        <p class="card-text text-muted mb-0">$ 20</p>
                        <button type="button" class="btn btn-outline-danger btn-sm">
                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Add To Cart"
                            >
                                <AddIcon />
                            </Tooltip>
                        </button>

                    </div>

                </div>
            </div>
        // </form>

    )
}

export default FlashCard