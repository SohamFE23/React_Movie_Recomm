import { useEffect,useState } from 'react'
import Search from './assets/components/Search'
import Spinner from './assets/components/spinner'
import MovieCard from './assets/components/MovieCard'

const API_BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        if (searchTerm.trim() && searchTerm.trim().length < 3) {
          setMovieList([]);
          setErrorMessage('Enter at least 3 characters to search.');
          return;
        }

        const endpoint = `${API_BASE_URL}?s=${encodeURIComponent(searchTerm || 'movie')}&apikey=${API_KEY}`;
        const response = await fetch(endpoint);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.Error || 'Failed to fetch movies');
        }

        if (data.Response === 'False') {
          if (data.Error === 'Too many results.') {
            throw new Error('Please enter a more specific movie title.');
          }
          throw new Error(data.Error || 'No movies found');
        }

        const moviesWithDetails = await Promise.all(
          (data.Search || []).slice(0, 10).map(async (movie) => {
            const detailsResponse = await fetch(`${API_BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
            const details = await detailsResponse.json();
            const rating = Number(details.imdbRating);

            return {
            id: movie.imdbID,
            title: movie.Title,
            vote_average: Number.isNaN(rating) ? null : rating,
            poster_path: movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : null,
            release_date: movie.Year && movie.Year !== 'N/A' ? movie.Year : null,
            original_language: details.Language && details.Language !== 'N/A'
              ? details.Language.split(',')[0]
              : 'N/A',
            };
          })
        );

        setMovieList(moviesWithDetails);
      } catch(error) {
        console.error('Error fetching movies:', error);
        setErrorMessage(error.message || 'Failed to fetch movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1> Find <span className="text-gradient">Movies</span> You'll
          Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">
            All Movies
          </h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
