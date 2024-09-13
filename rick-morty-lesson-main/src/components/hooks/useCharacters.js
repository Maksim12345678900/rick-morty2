import { fetchCharacters } from "../api";
import { useState, useEffect } from "react";

export const useCharacters = (ids) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      console.log(data);
      setCharacters(data);
      setIsLoading(false);
    });
  }, [ids]);

  return { characters, isLoading };
};
