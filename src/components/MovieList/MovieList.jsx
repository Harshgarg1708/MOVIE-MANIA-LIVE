import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import _ from 'lodash';

const MovieList = ({type}) =>{
    const [movies,setmovies] = useState([]);
    const [minRating,setminRating] = useState(0);
    const [filterMovies,setfilterMovies] = useState([]);
    const [sort,setsort] = useState({
        by: "default",
        order: "asc"
    });
    const [activeFilter, setActiveFilter] = useState(6);
    
    
    useEffect(() =>{
        fetchMovies();
        
    },[])

    useEffect(() => {
        if(sort.by !== 'default ') {
            const sortedMovies = _.orderBy(filterMovies,[sort.by],[sort.order])
             setfilterMovies(sortedMovies)
        }
       
    },[sort])
    
   
   const fetchMovies = async () => {

    let url;

    if (type === "upcoming") {
        const today = new Date().toISOString().split("T")[0];

        url = `https://api.themoviedb.org/3/discover/movie?api_key=1c4c0b1fe0e5f6fa9aa194de7cbf6334&region=IN&release_date.gte=${today}&sort_by=popularity.desc`;
    } 
      else if (type === "all") {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=1c4c0b1fe0e5f6fa9aa194de7cbf6334`;
    }
    else {
        url = `https://api.themoviedb.org/3/movie/${type}?api_key=1c4c0b1fe0e5f6fa9aa194de7cbf6334`;
    }

    const response = await fetch(url);
    const data = await response.json();

    setmovies(data.results);
    setfilterMovies(data.results);
};

    const handleFilter = rate =>{
        setminRating(rate);

        const filter = movies.filter(movie => movie.vote_average >= rate)
        setfilterMovies(filter);
    }

    const handleSort = e => {
        const{name,value} = e.target;
        setsort(prev =>( {...prev, [name] : value})
        )
    }
    
    return (

        <section className={styles.movie_list}>
            <header className={styles.movie_list_header}>
                {/* <h2 className={styles.movie_list_heading}>Popular<span>🔥</span> </h2> */}
                <div className={styles.movie_list_fs}>
                    
                    <ul className={styles.movie_filter}>
                        <li
                            className={`${styles.movie_filter_item} ${activeFilter === 8 ? styles.active : ""}`}
                            onClick={() => {
                                setActiveFilter(8);
                                handleFilter(8);
                            }}
                        >
                            8+ star
                        </li>

                        <li
                            className={`${styles.movie_filter_item} ${activeFilter === 7 ? styles.active : ""}`}
                            onClick={() => {
                                setActiveFilter(7);
                                handleFilter(7);
                            }}
                        >
                            7+ star
                        </li>

                        <li
                            className={`${styles.movie_filter_item} ${activeFilter === 6 ? styles.active : ""}`}
                            onClick={() => {
                                setActiveFilter(6);
                                handleFilter(6);
                            }}
                        >
                            6+ star
                        </li>
                    </ul>
                    <select name="by" id="" onChange={handleSort} value={sort.by} className={styles.movie_sorting}>
                        <option value="default">Sort by</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" onChange={handleSort} value={sort.order} className={styles.movie_sorting}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                        
                    </select>
                    
                </div>
            </header>
            <div className={styles.movie_cards}>
            {
                filterMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
            </div>
        </section>
    )
}

export default MovieList;
