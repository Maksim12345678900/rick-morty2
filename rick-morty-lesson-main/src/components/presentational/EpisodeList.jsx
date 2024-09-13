import { EpisodeItem } from "./EpisodeItem";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";

export const EpisodeList = () => {
  const { episodes } = useEpisodes();
  return (
    <div>
      {episodes.map((episode) => (
        // <EpisodeItem key={episode.id} episode={episode} />
        <Collapse
          key={episode.id}
          className="episode"
          title={episode.episode + ":" + episode.name}
          content={
            <CharacterList
              ids={episode.characters.map((character) => {
                const id = character.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
