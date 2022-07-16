import React, {useState, useEffect} from 'react'
import axios from "axios"

import TopPick_Card from './TopPick_Card'
import PageTitle from '../PageTitle'

const TopPicks = () => {
    const url = "https://free-store-api.herokuapp.com/offers"

    var [topOffers, setTopOffers]= useState([])

    useEffect( ()=>{
        axios.get(url).then(res => {
            setTopOffers(res.data)
        })
    }, [] )

    return (
        <div>
            <PageTitle
                title="Top Picks"
                desc="Explore to top picks just for you!!"
            ></PageTitle>

            <div class="row g-0 m-5">
                {
                    topOffers.map( (contents)=>{
                        return(
                            <TopPick_Card
                                myKey= {contents.id}
                                displayStatus= {contents.id > 8 ? "none" : ""}
                                imgSrc= {contents.image}
                                myItem= {contents.item}
                            ></TopPick_Card>
                        )
                    } )
                }
            </div>

        </div>
    )
}

export default TopPicks