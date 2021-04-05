import Pokedex from './Pokedex';

// let pokePool = [
//     {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
//     {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
//     {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
//     {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
//     {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
//     {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
//     {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
//     {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
// ]

function Pokegame() {
    let pokePool = [
        {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
        {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
        {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
        {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
        {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
        {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
        {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
        {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
    ]
    let pokeHand1 = createHand(pokePool);
    let pokeHand2 = createHand(pokePool);
    console.log("pokeHand1: ",pokeHand1);
    console.log("pokeHand2: ", pokeHand2);
    // let hand1Exp = pokeHand1.reduce((sum, pokemon) => {console.log(pokemon.base_experience)
    //     console.log("sum", sum);
    //     return sum+pokemon.base_experience}, 0)
    // let hand2Exp = pokeHand2.reduce((sum, pokemon) => {return sum+pokemon.base_experience}, 0)
    // console.log("hand1Exp:", hand1Exp);
    // console.log("hand2Exp:", hand2Exp);
    return (
        <div>
            <div>
                <h1> Hand 1</h1>
                <Pokedex pokeData={pokeHand1}/>
                {/* {hand1Exp > hand2Exp ? <h1>Hand 1 Wins!</h1>: null} */}
            </div>
            <div>
                <h1> Hand 2 </h1>
                <Pokedex pokeData={pokeHand2}/>
                {/* {hand2Exp > hand1Exp ? <h1>Hand 2 Wins!</h1>: null} */}
            </div>
        </div>
    )
}

function createHand(pokePool) {
    let pokeHand = [];
    for(let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random()*pokePool.length);
        pokeHand.push(pokePool[index]);
        pokePool.splice(index,1);
    }
    return pokeHand;
}

export default Pokegame;