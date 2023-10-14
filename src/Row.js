import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");


    // A sinppet of code which runs based on a specific condition 
    useEffect(() => {
        // IF [] empty , run once when the row loads , and dont run again
        // if [movies] then it will run when the movies changes 
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.original_name || movie?.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
            }).catch((error) => {
                console.log(error)
            })
        }
    }


    return (
        <div className='row' >
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    return <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row__posterLarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie.name} />
                })}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} ></YouTube>}
        </div>
    )
}

export default Row
