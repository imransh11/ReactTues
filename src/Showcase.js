function Showcase() {
    const favPokemon = 'Bulbasaur'
    const pokeCharacteristics = { type: 'fire', move: 'fly'}
    return (
      <div>
        <h1> {favPokemon}'s Showcase Component</h1>
        <h2>{favPokemon}'s type is Grass and one of their moves is Vine Whip</h2>
      </div>
    );
  }

  export default Showcase;
