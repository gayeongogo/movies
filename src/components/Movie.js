import React from 'react';
import propTypes from 'prop-types';
import "./Movie.scss"
import {Link} from "react-router-dom"

const Movie = ({id, year, title, summary, poster, genres}) => {
    return (
        <div className="movie">
            <Link to={`/Detail/${id}`}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className='movie_title'>{title}</h3>
                    <h5 className='movie_year'>{year}</h5>
                    <ul className="movie_genres">
                        {
                            genres.map((genre, idx) => {
                                return <li key={idx} className='movie_genre'>{genre}</li>
                            })
                        }
                    </ul>
                    <p className='movie_summary'>{summary.slice(0, 180)}</p>
                </div>
            </Link>
        </div>
    );
};

Movie.propTypes={
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired //배열 속 string 이라서

};

export default Movie;