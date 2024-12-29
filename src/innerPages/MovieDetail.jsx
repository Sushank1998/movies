import { useLocation } from "react-router-dom";
// import { cardData } from "../data";

function MovieDetail() {
  const location = useLocation();
//   console.log("🚀 ~ MovieDetail ~ location:", location.search.split("=")[1]);
  
//   console.log('caaa',cardData[location.search.split("=")[1]])
  const { movieDetails } = location.state || {  };
  if (!movieDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div className="p-8">
      <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3">
          <img
            src={movieDetails.img}
            alt={movieDetails.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-400">
            {movieDetails.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Genre:</strong> {movieDetails.director} |{" "}
            <strong>Year:</strong> {movieDetails.year} |{" "}
            <strong>Director:</strong> {movieDetails.genre}
          </p>

          <p className="mt-4 text-white">{movieDetails.description}</p>
          <button className="mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
