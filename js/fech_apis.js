

/* INICIO GALERIA DE RECETAS IMPORTADAS DESDE UNA API */
/* Galeria de recetas comida */

function invocarApiComidas() { // boton "Receta de comida al azar"
  const json =
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(meals => dibujarDatos_comidas(meals));
  console.log(json);
}

// objetoCompleto.atributo
// objetoCompleto.atributo.map(x => Filas(x));
//   función map, agarra un objeto y a cada elemento le aplica una funcion determinada, obteniendo un nuevo objeto.
// const nuevoObjeto = objetoCompleto.atributo.map(x => Filas(x));


function dibujarDatos_comidas(json) { // boton "Receta de comida al azar"
  const filas_comidas = json.meals.map(x => Fila_comidas(x));
  document.getElementById('contenedor-comida').innerHTML = filas_comidas.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función
function Fila_comidas(obj) {
  let listaIngredientesC = [obj.strIngredient1, obj.strIngredient2, obj.strIngredient3, obj.strIngredient4, obj.strIngredient5, obj.strIngredient6, obj.strIngredient7, obj.strIngredient8, obj.strIngredient9, obj.strIngredient10, obj.strIngredient11, obj.strIngredient12, obj.strIngredient13, obj.strIngredient14, obj.strIngredient15, obj.strIngredient16, obj.strIngredient17, obj.strIngredient18, obj.strIngredient19, obj.strIngredient20, obj.strIngredient21];
  let listaCantidadesC = [obj.strMeasure1, obj.strMeasure2, obj.strMeasure3, obj.strMeasure4, obj.strMeasure5, obj.strMeasure6, obj.strMeasure7, obj.strMeasure8, obj.strMeasure9, obj.strMeasure10, obj.strMeasure11, obj.strMeasure12, obj.strMeasure13, obj.strMeasure14, obj.strMeasure15, obj.strMeasure16, obj.strMeasure17, obj.strMeasure18, obj.strMeasure19, obj.strMeasure20, obj.strMeasure21];
  let ingredientesC = `<tr>
            <td> <!-- td = t datos -->
            </td>
            <td>
            </td>
            </tr>`;
  for (let i = 0; i < 21; i++) {
    if ((listaIngredientesC[i] != "") || (listaIngredientesC[i] != null) || (listaIngredientesC[i] != "nulo")) {
      ingredientesC = ingredientesC + `<tr>
            <td class="quicksand-ingredientes" style="padding-left: 10px !important;"> <!-- td = t datos -->
                     ${listaIngredientesC[i]}
            </td>
            <td class="quicksand-ingredientes" style="padding-left: 10px !important;">
                      ${listaCantidadesC[i]}
            </td>
            </tr>`
    } else {
      i = 22;
    }
  }
  return `
  <div class="img-descripcion">
      
 <h2 class="quicksand-ingredientes">${obj.strMeal}</h2>
     <div class="img-ingredientes">
       <div class="receta-img">
             <img src=${obj.strMealThumb} alt="" >
       </div>

       <div class="lista_de_ingredientes">
            <table class="quicksand-ingredientes"> 
                 <thead>
                      <tr> <!-- inicio fila 1 -->
                         <th class="quicksand-ingredientes"> <!-- th = t head -->
                             Ingredientes
                         </th>
                         <th class="quicksand-ingredientes">
                             Cantidades
                         </th>
                      </tr><!-- fin fila 1 -->
                 </thead>
                 <!-- PARTE DE LOS DATOS: tbody 
                 <tbody>
                      ${ingredientesC}
                 </tbody>
            </table>  
       </div>   
     </div> 
             <div class="receta-texto">
                <h2 class="quicksand-ingredientes">El paso a paso: ${obj.strMeal}</h2>
                <p class="quicksand-ingredientes">${obj.strInstructions}</p>
             </div>
 </div>`
}

function invocarApiBebidas() { // boton "Cóctel de bebida al azar"
  const json =
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(drinks => dibujarDatos_bebidas(drinks));
  console.log(json);
}
function dibujarDatos_bebidas(json) {
  const filas_bebidas = json.drinks.map(x => Fila_bebidas(x));
  document.getElementById('contenedor-bebidas').innerHTML = filas_bebidas.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función
function Fila_bebidas(obj) {

  let listaIngredientesB = [obj.strIngredient1, obj.strIngredient2, obj.strIngredient3, obj.strIngredient4, obj.strIngredient5, obj.strIngredient6, obj.strIngredient7, obj.strIngredient8, obj.strIngredient9, obj.strIngredient10, obj.strIngredient11, obj.strIngredient12, obj.strIngredient13, obj.strIngredient14, obj.strIngredient15, obj.strIngredient16, obj.strIngredient17, obj.strIngredient18, obj.strIngredient19, obj.strIngredient20, obj.strIngredient21];
  let listaCantidadesB = [obj.strMeasure1, obj.strMeasure2, obj.strMeasure3, obj.strMeasure4, obj.strMeasure5, obj.strMeasure6, obj.strMeasure7, obj.strMeasure8, obj.strMeasure9, obj.strMeasure10, obj.strMeasure11, obj.strMeasure12, obj.strMeasure13, obj.strMeasure14, obj.strMeasure15, obj.strMeasure16, obj.strMeasure17, obj.strMeasure18, obj.strMeasure19, obj.strMeasure20, obj.strMeasure21];
  let ingredientesB = `<tr>
            <td> <!-- td = t datos -->
            </td>
            <td>
            </td>
            </tr>`;
  for (let i = 0; i < 21; i++) {
    if ((listaIngredientesB[i] != "") || (listaIngredientesB[i] != null) || (listaIngredientesB[i] != "nulo")) {
      ingredientesB = ingredientesB + `<tr>
            <td class="quicksand-ingredientes" style="padding-left: 10px !important;"> <!-- td = t datos -->
                     ${listaIngredientesB[i]}
            </td>
            <td class="quicksand-ingredientes" style="padding-left: 10px !important;">
                      ${listaCantidadesB[i]}
            </td>
            </tr>`
    } else {
      i = 22;
    }
  }

  return `
<div class="img-descripcion">
      
<h2>${obj.strDrink}</h2>
    <div class="img-ingredientes">
      <div class="receta-img">
            <img src=${obj.strDrinkThumb} alt="" >
      </div>

      <div class="lista_de_ingredientes">
           <table class="quicksand-ingredientes"> 
                <thead>
                     <tr> <!-- inicio fila 1 -->
                        <th class="quicksand-ingredientes"> <!-- th = t head -->
                            Ingredientes
                        </th>
                        <th class="quicksand-ingredientes">
                            Cantidades
                        </th>
                     </tr><!-- fin fila 1 -->
                </thead>
                <!-- PARTE DE LOS DATOS: tbody 
                <tbody>
                ${ingredientesB}
                </tbody>
           </table>  
      </div>   
    </div> 
            <div class="receta-texto">
               <h2 class="quicksand-ingredientes">El paso a paso: ${obj.strDrink}</h2>
               <p class="quicksand-ingredientes">${obj.strInstructions}</p>
            </div>
</div>`

}


