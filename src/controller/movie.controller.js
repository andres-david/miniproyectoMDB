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

/*  POST   */ 


function postMovies( request, response ){
    
    console.log( request.body );

    let movie = new Movie({
        title: request.body.title,
        releaseYear: request.body.releaseYear,
        genre: request.body.genre,
        actors: request.body.actors,
        writers: request.body.writers,
        directors: request.body.directors,
        producer: request.body.producer
    });

    movie.save()
    .then( ( movie ) => {
        console.log("Pelicula creada correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function postActors( request, response ){
    
    console.log( request.body );

    let actors = request.body.actors;
    let id = request.body.id;

    Movie.findByIdAndUpdate( id, {$push: {actors: actors} } )
    .then( ( movie ) => {
        console.log("Actor agregado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function postDirectors( request, response ){

    console.log( request.body );

    let id = request.body.id;
    let directors = request.body.directors;

    Movie.findByIdAndUpdate( id, {$push: {directors: directors} } )
    .then( ( movie ) => {
        console.log("Director agregado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function postWriters( request, response ){

    console.log( request.body );

    let id = request.body.id;
    let writers = request.body.writers;

    Movie.findByIdAndUpdate( id, {$push: {writers: writers} } )
    .then( ( movie ) => {
        console.log("Guionista agregado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function putMovie( request, response ){

    console.log(request.body);

    let title = request.body.title;
    let releaseYear = request.body.releaseYear;
    let genre = request.body.genre;
    let producer = request.body.producer;
    let id = request.body.id;

    Movie.findByIdAndUpdate(id, {
        title: title,
        releaseYear: releaseYear,
        genre: genre,
        producer: producer 
    })
    .then( (movie) => {
        console.log("Pelicula actualizada correctamente");
        console.log(movie);
        response.send(movie);
    })
    .catch( (error) => {
        console.log(error);
    })

}


function deleteMovie( request, response ){

    console.log(request.body);

    Movie.findByIdAndDelete(request.body.id)
    .then( (professional) => {
        console.log("Pelicula eliminada correctamente");
        console.log(professional);
        response.send(professional);
    })
    .catch( (error) => {
        console.log(error);
    })
    
}


function deleteActor( request, response ){

    console.log( request.body );

    let id = request.body.id;

    Movie.findByIdAndUpdate( id, {$pop: {actors: 1} } )
    .then( ( movie ) => {
        console.log("Actor eliminado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function deleteDirector( request, response ){

    console.log( request.body );

    let id = request.body.id;

    Movie.findByIdAndUpdate( id, {$pop: {directors: 1} } )
    .then( ( movie ) => {
        console.log("Director eliminado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}


function deleteWriter( request, response ){

    console.log( request.body );

    let id = request.body.id;

    Movie.findByIdAndUpdate( id, {$pop: {writers: 1} } )
    .then( ( movie ) => {
        console.log("Guionista eliminado correctamente");
        console.log( movie );
        response.send( movie );
    })
    .catch( (error) => {
        console.log(error);
    })

}

module.exports = {getMovies, getActors, getDirectors, getWriters, getProducer,
                    postMovies, postActors, postDirectors, postWriters,
                    putMovie,
                    deleteMovie, deleteActor, deleteDirector, deleteWriter}