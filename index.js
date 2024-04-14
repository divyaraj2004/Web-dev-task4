
const api ="01b42205e08c1616c281f0a1a6ddd131";
const baseUrl ="https://api.themoviedb.org/3";

const apiPath = {
    fetchAllCategories:`${baseUrl}/genre/movie/list?api_key=${api}`,
    fetchMovielist: (id)=>`${baseUrl}/discover/movie?api_key=${api}&with_genres=${id}`
}


//boot app
function init() {
    fetchandbuildAllsection();
    
}

function fetchandbuildAllsection() {
    fetch(apiPath.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories = res.genres;
        if (Array.isArray(categories)&& categories.length) {
           categories.forEach(categories => {fetchAndbuildMovieSection(apiPath.fetchMovielist(categories.id),categories);})
            
        }
        //console.table(movies);
    })
    .catch(err=>console.log(err));
    
}

function fetchAndbuildMovieSection(fetchUrl,categories){
    console.log(fetchUrl,categories); 
    fetch(fetchUrl)
    .then(res => res.json())
    .then(res =>{ console.table(res.results);
    const movies = res.result;
    if(Array.isArray(movies)&& movies.length){
       buildMovieSection(movies, categories.name); 
    }

})
    .catch(err => console.log(err))

}
function buildMovieSection(list ,categoryName){

}
window.addEventListener('load',function(){
    init();
})