export async function fetchData() {
    try {
        const URL = "https://jsonplaceholder.typicode.com/users";
        const resultado = await fetch(URL);
        const dataFinal = await resultado.json();
        
        return(dataFinal);

    } catch (error) {
        console.error(error);
    }
}

fetchData();

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/map
// e4cd8dedba6942a1ad3628f74274d38a