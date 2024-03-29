let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 100) + 1;

    let req = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(req);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;

}


button.addEventListener("click", changePokemon);