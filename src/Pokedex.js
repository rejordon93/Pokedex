import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  const { pokemon } = props;

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemon.map((pokemonData) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
        return (
          <Pokecard
            key={pokemonData.id}
            id={pokemonData.id}
            name={pokemonData.name}
            type={pokemonData.type}
            base_experience={pokemonData.base_experience}
            image={imageUrl} // Pass the image URL as a prop to Pokecard
          />
        );
      })}
    </div>
  );
};

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokedex;
