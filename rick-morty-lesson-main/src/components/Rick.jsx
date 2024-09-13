import { useState, useEffect } from "react";
import { fetchEpisodes, fetchCharacters, fetchLocations } from "../api";
import "./Rick.css";
import { EpisodeList } from "./EpisodeList";
import { LocationList } from "./LocationList";

export const Rick = () => {
  const [episodes, setEpisodes] = useState([]);
  const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
  const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});
  const [locations, setLocations] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  useEffect(() => {
    fetchEpisodes().then((data) => {
      console.log(data);
      setEpisodes(data);
    });
  }, []);

  useEffect(() => {
    fetchLocations().then((data) => {
      console.log(data);
      setLocations(data);
      setIsLoadingLocations(false);
    });
  }, []);

  const handleEpisodeClick = (episode) => {
    const ids = episode.characters.map((character) => {
      const id = character.split("/").pop();
      return id;
    });

    setIsLoadingByEpisodes({ ...isLoadingByEpisodes, [episode.id]: true });

    fetchCharacters(ids).then((data) => {
      console.log(data);
      setCharactersByEpisodes({ ...charactersByEpisodes, [episode.id]: data });
      setIsLoadingByEpisodes({ ...isLoadingByEpisodes, [episode.id]: false });
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "character-alive";
      case "Dead":
        return "character-dead";
      default:
        return "character-unknown";
    }
  };

  return (
    <div>
      <EpisodeList episodes={episodes} handleEpisodeClick={handleEpisodeClick} />
      {!isLoadingLocations && <LocationList locations={locations} />}
    </div>
  );
};