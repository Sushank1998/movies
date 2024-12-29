import { useEffect, useState } from "react";
import axios from "axios";
import SeriseCard from "../innerPages/SeriseCard";

function Serise() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime`);
        console.log("res===",res);
        setMovies(res.data.data); 
        setLoading(false);
      } catch (error) {
        setError('Error getting movies');
        setLoading(false);
      }
    };
    fetchMovies();
  }, []); // Only run once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
        <h1>movies::{movies.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {movies.map((movie) => (
          <SeriseCard key={movie.mal_id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Serise;
