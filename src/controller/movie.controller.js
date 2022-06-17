let Movie = require("../model/movieMDB");

function getMovies( request, response ){
    if( request.params.id ){

        Movie.findById( request.params.id )
        .then( (movie) => {
            console.log(movie);
            response.send(movie);
        })
        .catch( (err) => {
            console.log( err );
        })

    }
    else{
        
        Movie.find({})
        .then( ( movie ) => {
            console.log( movie );
            response.send( movie );
        })
        .catch( (err) => {
            console.log( err );
        })

    }
}

function getActors( request, response ){

    Movie.findById( request.params.id )
    .then( (movie) => {
        console.log( movie.actors );
        response.send( movie.actors );
    })
    .catch( (err) => {
        console.log( err );
    })

}

function getDirectors( request, response ){

    Movie.findById( request.params.id )
    .then( (movie) => {
        console.log( movie.directors );
        response.send( movie.directors );
    })
    .catch( (err) => {
        console.log( err );
    })

}

function getWriters( request, response ){

    Movie.findById( request.params.id )
    .then( (movie) => {
        console.log( movie.writers );
        response.send( movie.writers );
    })
    .catch( (err) => {
        console.log( err );
    })

}

function getProducer( request, response ){

    Movie.findById( request.params.id )
    .then( (movie) => {
        console.log( movie.producer );
        response.send( movie.producer );
    })
    .catch( (err) => {
        console.log( err );
    })

}


module.exports = {getMovies, getActors, getDirectors, getWriters, getProducer}