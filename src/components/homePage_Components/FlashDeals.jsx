import React, { useState } from 'react'
import PageTitle from "../PageTitle"
import FlashCard from './FlashCard';
import { flashData1, flashData2, flashData3 } from '../Data';

// Material UI
import Fab from '@mui/material/Fab';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


const FlashDeals = () => {

    var [displayStatus, setDisplayStatus] = useState("d-none d-lg-block card ms-2 me-2");

    return (
        <div class="mb-5">

            <PageTitle
                title="Flash Deals"
                desc="Explore the Flash Deals of This Season!!"
            ></PageTitle>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <div class="d-flex justify-content-evenly dark-bg">
                            {
                                flashData2.map((contents) => {

                                    var myClass;
                                    if (contents.id == 1) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            key={contents.id}
                                            title={contents.label}
                                            Imgsrc={contents.src}
                                        ></FlashCard>

                                    )
                                })
                            }
                        </div>
                    </div>

                    <div class="carousel-item">

                        <div class="d-flex justify-content-evenly dark-bg">
                            {
                                flashData2.map((contents) => {

                                    var myClass;
                                    if (contents.id == 1) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            key={contents.id}
                                            title={contents.label}
                                            Imgsrc={contents.src}
                                        ></FlashCard>

                                    )
                                })
                            }
                        </div>
                    </div>

                    <div class="carousel-item">

                        <div class="d-flex justify-content-evenly dark-bg">
                            {
                                flashData2.map((contents) => {

                                    var myClass;
                                    if (contents.id == 1) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            key={contents.id}
                                            title={contents.label}
                                            Imgsrc={contents.src}
                                        ></FlashCard>

                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <Fab size="small" color="secondary" aria-label="add">
                        <ArrowBackIosSharpIcon />
                    </Fab>
                </div>

                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <Fab size="small" color="secondary" aria-label="add" >
                        <ArrowForwardIosSharpIcon />
                    </Fab>
                </div>


            </div>
        </div>

    )
}

export default FlashDeals