import React from 'react';

function GenreFilter({ genres }) {
  const handleGenreClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div>
      <h2>Genre Filter</h2>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleGenreClick(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
