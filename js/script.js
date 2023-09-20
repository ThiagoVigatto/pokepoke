const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemonimage');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let searchPokemon = 1;
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch ('https://pokeapi.co/api/v2/pokemon/$(pokemon)')
if (APAIResponse.status === 200){
    const data = await AIPResponse.json()
    return data;
}
}
const renderPoekemon = (pokemon) => {
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    
    if(data){
        pokemonImage.computedStyleMap.display = 'black';
        pokemonName.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation']['black-white']['animated']['front-default'];
        input.value = '';
        searchPokemon = data.id;
    }else{
        pokemonImage.computedStyleMap.display = 'name';
        pokemonName.innerHTML = 'Not Found :c';
        pokemonNumber.innerHTML = '';
    }
    }
    form.addEventListener('submit' , (event) =>{
        event.preventDefault();
        renderPoekemon(input.value.tolowerCase());
    });
    buttonpriv.addEventListener('click', ()=> {
        searchPokemon += 1;
    searchPokemon -= 1;
    renderPoekemon(searchPokemon);
    });
        renderPoekemon(searchPokemon);
