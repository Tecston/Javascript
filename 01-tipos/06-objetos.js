//Se declara las variables normalmente
let pelicula = "Avengers";
let ano = "2021";
let tipo = "Marvel";

//Se crea un objeto con las variables
const serie ={
    pelicula: "Avengers",
    ano: 2021,
    tipo: "Marvel",
};

//imprime la variable pelicula
console.log(pelicula);
//De la clase objeto imprime la variable ano
console.log(serie.ano);
//Imprimela variable tipo de mi objeto
console.log(serie[`tipo`]);

//Se crea un varible para luego modifica una ya establecidaz
let llave = `ano`;
serie[llave] = 2024;

//eliminamos la varibale de la clase objeto
delete serie.pelicula;
//Se impirme nuestro objeto
console.log(serie);