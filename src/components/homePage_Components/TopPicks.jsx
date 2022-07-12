import React from 'react'
import TopPick_Card from './TopPick_Card'
import PageTitle from '../PageTitle'

const TopPicks = () => {
    return (
        <div>
            <PageTitle
                title="Top Picks"
                desc="Explore to top picks just for you!!"
            ></PageTitle>

            <div class="row g-0 m-5">
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
                <TopPick_Card></TopPick_Card>
            </div>

        </div>
    )
}

export default TopPicks