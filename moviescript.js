var currentUrl = window.location.href;
let params = (new URL(currentUrl)).searchParams;
var id = params.get("id");
var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = function(){
    var responseJSON = JSON.parse(xhrRequest.response);
    var title = responseJSON.Title;
    document.getElementById('name').innerText = title;
    var year = responseJSON.Year;
    document.getElementById('year').innerText = year;
    var realeaseDate = responseJSON.Released;
    document.getElementById('release').innerText = realeaseDate;
    var runtime = responseJSON.Runtime;
    document.getElementById('duration').innerText = runtime;
    var genre = responseJSON.Genre;
    document.getElementById('genre').innerText = genre;
    var director = responseJSON.Director;
    document.getElementById('director').innerText = director;
    var writer = responseJSON.Writer;
    document.getElementById('writer').innerText = writer;
    var actors = responseJSON.Actors;
    document.getElementById('actors').innerText=actors;
    var plot = responseJSON.Plot;
    document.getElementById('plot').innerText = plot;
    var language = responseJSON.Language;
    document.getElementById('language').innerText = language;
    var poster = responseJSON.Poster;
    var url = document.getElementById('poster')
    url.setAttribute('src', poster);
}
xhrRequest.onerror = function(){
    console.log('Error Occured');
}
var apiurl = 'http://www.omdbapi.com/?apikey=9a845526&i='+id;
xhrRequest.open('get',apiurl);
xhrRequest.send();