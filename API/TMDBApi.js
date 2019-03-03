const API_TOKEN = "73728846671c50a8586c60abf6313743";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url) 
        .then((response) => response.json())
        .catch((error) => console.log(error))
}