import styles from "./MovieCard.module.css";

const MovieCard = ({movie}) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="blank" className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-title" className={styles.movie_poster}/>
            <div className={styles.movie_details}>
                <h3 className={styles.movie_details_heading}>{movie.original_title}</h3>
            
                <div className={styles.movie_date_rate}>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average}⭐</p>
                </div>
                <p className={styles.movie_description}>{movie.overview.slice(0,100)+"..."}</p>
            </div>
        </a>
    )
}

export default MovieCard;
