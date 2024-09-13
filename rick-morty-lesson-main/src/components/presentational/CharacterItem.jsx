export const CharacterItem = ({ character }) => {
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
    <div className={"character " + getStatusClass(character.status)}>
      <div className="character-left">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-right">
        <h3>{character.name}</h3>
        <div>Вид: {character.species}</div>
        <div>Пол: {character.gender}</div>
        <div>Локация: {character.location.name}</div>
      </div>
    </div>
  );
};
