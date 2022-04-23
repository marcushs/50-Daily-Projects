const pokeContainer = document.getElementById('poke-container')
const pokemonCount = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF4FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}


//get an array of types with indices
const mainTypes = Object.keys(colors)

const fetchPokemons = async () => {
    for(i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { data } = await axios.get(url)

    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const id = pokemon.id.toString().padStart(3, '0')
    
    const pokeTypes = pokemon.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = 
    `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    pokeContainer.appendChild(pokemonEl)
}

fetchPokemons()
