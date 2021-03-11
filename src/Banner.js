
import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios'
import request from './Request'

function Banner() {

    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){ 
        const requests = await axios.get(request.fetchNetflixOrginals);
        setMovie(
            requests.data.results[
            Math.floor(Math.random() * requests.data.results.length - 1)
            ]
        );
        return requests;
    }
        fetchData();
},
[])

    console.log(movie)
        function truncate(string, n) {
            return string?.length > n ? string.substr(0, n - 1) + "..." : string;
        }
            
          
    return (
      
        <header className="banner"
            style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition:"center center",
            }}
            
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.original_name || movie?.name }</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview,150)}
                </h1>
            </div>
            <div className="banner_fadebottom" />
        </header>
    )
}

export default Banner
