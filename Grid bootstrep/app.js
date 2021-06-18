const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = '03babaa965a14aafd23f0f1696cc4340';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

function carregaFilmes (){
    let xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function pesquisaFilmes (){
    let xhr = new XMLHttpRequest ();

    let query = document.getElementById ('inputPesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie?api_key=' + API_KEY + '&query=' + query);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes (evt) {
    let textoHTML = '';

    let filmes = JSON.parse (evt.target.responseText);


    for (let i = 0; i < filmes.results.length; i++) {
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;

        textoHTML += `<div class="card col-12 col-sm-12 col-md-6 col-lg-3">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${sinopse}</p>
                <a href="main2.html" class="btn btn-primary">Abrir Filme</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;

}