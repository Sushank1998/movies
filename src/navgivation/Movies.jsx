// import React from 'react'
import axios from "axios";

import Movies_Card from "../innerPages/Movies_Card";
import { useEffect, useState } from "react";

function Movies() {
  const [country, setCountry] = useState("USA");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://restcountries.com/v3.1/name/${country}`;

    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [country]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSearchClick = () => {
    if (country) {
      setData(null);
      setError("");
      setLoading(true);
    } else {
      setError("Please enter a valid country name");
    }
  };

  return (
    <div>
      <div className="text-center gap-4 m-4 ">
        <input
          className="ouline border rounded-xl px-4 py-2 mx-2"
          type="text"
          value={country}
          onChange={handleCountryChange}
          placeholder="Enter country name"
        />
        <button
          className=" bg-blue-500 py-2 px-4 rounded-xl  mx-2"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-7">
            {data && data.length > 0 ? (
              <>
                {data.slice(0, 3).map((countryData, index) => (
                  <Movies_Card key={index} country={countryData} />
                ))}
              </>
            ) : (
              <p> No data found for this country.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
