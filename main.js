fetch('https://pokeapi.co/api/v2/pokemon/27/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>${pokemon.height}<p><p>${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/48/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = `<p>${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/50/')
.then(response => response.json())
.then(pokemon2 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = `<p>${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))
