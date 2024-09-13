import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterList = ({ ids }) => {
  const { characters, isLoading } = useCharacters(ids);

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
