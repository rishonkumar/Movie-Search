var sbtn = document.getElementById('search-btn');
var mContainer = document.getElementById('all-movies-container');
var mbox = document.getElementById('all-movies-container');

sbtn.addEventListener('click', searchMovie);
function searchMovie(e){
    var movieName = document.getElementById('input').value;
    mbox.innerHTML="";
    e.preventDefault();
    mContainer.style.display = 'block';
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        var responseJSON = JSON.parse(xhrRequest.response);
        var movies = responseJSON.Search;
        for(let movie of movies){
            console.log(movie.Title);
            let mtitle = movie.Title;
            let poster = movie.Poster;
            let type = movie.Type;
            let year = movie.Year;
            let id = movie.imdbID;
            mbox.innerHTML+= `<a href="movieinfo.html?id=${id}" target="_blank">
                                <div class="movie-box">
                                   <div class="poster">
                                       <img src="${poster}" class="poster-img">
                                    </div>
                                    <div class="movie-details">
                                       <p><span class="span-title">Movie-Name : </span><span class="span-detail">${mtitle}</span></p>
                                       <p><span class="span-title">Release-Year : </span><span class="span-detail">${year}</span></p>
                                       <p><span class="span-title">Movie-Type : </span><span class="span-detail">${type}</span></p>
                                       <input type="text" id="movieID" value="${id}" style="display: none;"></input>
                                    </div>
                               </a>
                                    <div class="favourites" title="${mtitle}" id="${id}" onclick="addfavmovie(${id})">
                                      <br><br><br><span class="heart-btn"><i class="fa-solid fa-heart"></i></i></span>
                                    </div>
                                </div>`      
        }
    }
    xhrRequest.onerror=function(){
        console.log('Error');
    }
    var apiurl = 'http://www.omdbapi.com/?apikey=9a845526&s='+movieName;
    xhrRequest.open('get',apiurl);
    xhrRequest.send();
}
function addfavmovie(id){
    id.style.color = 'red';
    var name = id.getAttribute("title");
    var mid = id.getAttribute("id");
    localStorage.setItem(mid, name);
    var favList = document.getElementById('animation');
    favList.innerHTML+='<div class="f-movie" id+"'+mid+'"><p> '+name+' </p></div>';
}
