$(function() {

  const movieLists = $('.episodes');
  const movieUrl = 'https://swapi.co/api/films/';

  function insertContent(movies) {
    for(let i = 0 ; i < movies.length; i++) {
        let li = $('<li>', {class: "movie"});
        let h3 = $('<h3>').text('title: ' + movies[i].title + ', release: ' + movies[i].release_date);
        li.append(h3);
        movieLists.append(li);
    };
  }

    function sortJSON(data, key, way) {
        return data.sort(function(a, b) {
            let x = a[key]; let y = b[key];

            if (way === 'asc' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (way === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
    }

  function loadMovies() {
        $.ajax({
            url: movieUrl
        }).done(function(response){
            console.log(response);
     		insertContent(sortJSON(response.results,'release_date', 'asc'));
  }).fail(function(error) {
           console.log(error);
       })
  }

  loadMovies();
});
