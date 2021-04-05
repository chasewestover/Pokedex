import Pokecard from './Pokecard';
const rootImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokedex(props) {
  const { pokeData } = props;
  return <div style={{}}>
    {pokeData.map(p =>
      <div style={{ margin: "10px", borderRadius: "10px", display: "inline-block", height: "200px", width: "150px", border: "solid black 1px" }}>
        <Pokecard name={p.name} type={p.type} image={rootImage + p.id + ".png"} />
      </div>)}
  </div>;
}

Pokedex.defaultProps = {
  pokeData: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
};

export default Pokedex;