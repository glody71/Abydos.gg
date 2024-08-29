import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import arona from '../assets/arona.png';
import loadingImage from '../assets/arona2.png'; // Import your loading image

const Card = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          `https://api-blue-archive.vercel.app/api/characters?page=${page}`
        );
        setCharacters(response.data.data);
        setTotalPages(response.data.dataAllPage);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchCharacters();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Filter characters based on searchQuery
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex md:m-8 mt-24 md:mt-24">
        {loading ? ( // Conditionally render loading image
          <div className="flex flex-col justify-center items-center">
            <img src={loadingImage} alt="Loading" className="h-64 w-64" />
            <p className="text-gray-400">Loading...</p>
          </div>
        ) : (
          filteredCharacters.length === 0 ? (
            <div className="flex flex-col gap-8 items-center">
              <p className="text-center text-gray-500">No Characters Found</p>
              <img src={arona} alt="arona" className="h-64 w-64"/>
            </div>
          ) : (
            <div className="flex items-center flex-wrap justify-center gap-8">
              {filteredCharacters.map((character) => (
                <div
                  onClick={() => navigate(`/students/${character.id}`)}
                  className="relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:border-white hover:border-2"
                  key={character.id}
                  style={{ width: "160px" }}
                >
                  <img
                    src={character.photoUrl}
                    alt={character.name}
                    style={{ width: "100%" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full text-white bg-slate-800 bg-opacity-60 p-3">
                    <div className="flex items-center justify-around">
                      <p className="">{character.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-slate-700 rounded text-white"
        >
          {"<"}
        </button>
        <span className="text-white">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-slate-700 text-white rounded"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Card;
