import fetch from 'node-fetch'

var obj;

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.json())
  .then(data => {
    obj = data.abilities;
    obj = data
  
  })
  //var listaIn = obj.game_index
  
  .then(() => {
    console.log(obj);
   });





 