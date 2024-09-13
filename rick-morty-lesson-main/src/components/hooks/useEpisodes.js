import { useState, useEffect } from "react";
import { fetchEpisodes } from "../api";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetchEpisodes().then((data) => {
      setEpisodes(data);
    });
  }, []);

  return { episodes };
};
