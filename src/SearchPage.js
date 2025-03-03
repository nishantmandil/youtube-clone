import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image= "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer"
            verified
            subs="900K"
            noOfVideos={432}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level." />

            <hr/>

            <VideoRow 
            views="250K"
            subs="900K"
            description="In this FREE LIVE training, Qazi & Sonny will show you how to build a TINDER Clone with REACT JS 🚀"
            timestamp="1 month ago"
            channel="Clever Programmer"
            title="🔴 Let's Build a TINDER Clone with REACT JS for Beginners"
            image="https://th.bing.com/th/id/OIP.dj4xktYo2M7Uhuqm8W96BAHaEK?w=277&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            />

            <VideoRow 
            views="250K"
            subs="900K"
            description="In this FREE LIVE training, Qazi & Sonny will show you how to build a TINDER Clone with REACT JS 🚀"
            timestamp="1 month ago"
            channel="Clever Programmer"
            title="🔴 Let's Build a TINDER Clone with REACT JS for Beginners"
            image="https://th.bing.com/th/id/OIP.dj4xktYo2M7Uhuqm8W96BAHaEK?w=277&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            />

            <VideoRow 
            views="250K"
            subs="900K"
            description="In this FREE LIVE training, Qazi & Sonny will show you how to build a TINDER Clone with REACT JS 🚀"
            timestamp="1 month ago"
            channel="Clever Programmer"
            title="🔴 Let's Build a TINDER Clone with REACT JS for Beginners"
            image="https://th.bing.com/th/id/OIP.dj4xktYo2M7Uhuqm8W96BAHaEK?w=277&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            />
        </div>
    )
}

export default SearchPage
