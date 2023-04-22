import React, { useState, useEffect } from "react";

export default function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [aliveOnly, setAliveOnly] = useState(false);
  const [deadOnly, setDeadOnly] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAliveOnlyChange = (event) => {
    setAliveOnly(event.target.checked);
  };

  const handleDeadOnlyChange = (event) => {
    setDeadOnly(event.target.checked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`;
        if (aliveOnly) {
          url += "&status=alive";
        } else if (deadOnly) {
          url += "&status=dead";
        }
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
          setErrorMessage(`Character not found: ${filter}`);
          setCharacters([]);
        } else {
          setCharacters(data.results);
          setErrorMessage("");
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong");
        setCharacters([]);
      }
    };
    fetchData();
  }, [page, filter, aliveOnly, deadOnly]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={handleFilterChange}
        />
        <label>
          <input
            type="checkbox"
            checked={aliveOnly}
            onChange={handleAliveOnlyChange}
          />
          Alive
        </label>
        <label>
          <input
            type="checkbox"
            checked={deadOnly}
            onChange={handleDeadOnlyChange}
          />
          Dead
        </label>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>Name: {character.name}</p>
              <p>Status: {character.status}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
