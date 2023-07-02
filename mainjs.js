var myhttp = new XMLHttpRequest();
 myhttp.open('GET','https://api.themoviedb.org/3/trending/all/day?api_key=713e5b505cc52f5aa68161a6f9c471c1') ;
 myhttp.send();
 var movies = [];

 myhttp.addEventListener('readystatechange',function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
        movies = JSON.parse(myhttp.response).results
        console.log(movies)
        Display()
        
    }
    
 })

 function Display() {
    var temp='';

    for (var i = 0; i < movies.length; i++) {
        temp +=`<div class=" col-4">
        <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}"  class="w-100" alt="">
        
        <h3> ${movies[i].title}</h3>
        <p>${movies[i].overview}</p>


    </div>
    `
        
    }
    console.log(document.getElementById('demo'),temp)
    var demo = document.getElementById('demo')
    document.getElementById('demo').innerHTML= temp;
 }

// async function getpa() {
//     var rseult = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=713e5b505cc52f5aa68161a6f9c471c1')
//     var Frseult = await rseult.json()
//     console.log(Frseult);
    
// }

// getpa()