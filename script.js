
const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest();
  respostaDaBusca.open("GET", `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}&api_key=P963A9NlSKYv7fOLRaTYob8TVoF5Eplh`);
  respostaDaBusca.onload = carregaPostsComGifs;
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();
}

function carregaPostsComGifs(){
  listaGifs = JSON.parse(this.responseText)["data"];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img>
        </div>
        `).join("")}
      </div>`;
}
  




//http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=271d3e19107a41e9a5219db8d8774094
/* Busca artigos do nytimes

const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaArtigos = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest();
  respostaDaBusca.open("GET", `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaGif()}&api-key=271d3e19107a41e9a5219db8d8774094`);
  respostaDaBusca.onload = carregaPostsComGifs;
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();
}

function carregaPostsComGifs(){
  listaArtigos = JSON.parse(this.responseText)["response"] ["docs"];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaArtigos.map(artigos => `
        <div class="gif">
          <p>${artigos.headline.main}</p>
        </div>
        `).join("")}
      </div>`;
}

*/