const URLAPI = "https://pokeapi.co/api/v2/pokemon/"

//usando fetch tradicionnal
// fetch(URLAPI)
//     .then(response => response.JSON())
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

//usando try catch
const obtenerData = async () => {
    try {
        const response = await fetch(URLAPI)
        const dataFinal = await response.json()
        console.log(dataFinal)
        renderData(dataFinal.results)
    } catch (error) {
        console.log(error)
    }
}

obtenerData()

function renderData (apiResponse){
    apiResponse.forEach(element => {
        const toInsert = document.createElement("section")
        toInsert.innerHTML = `
        <article class= 'nombre'>
            <h1>${element.name}</h1>
        </article>
        `
        toInsert.classList.add("pokemon")  //sirve para agregarle clases al padre
        document.body.append(toInsert)
    });
}