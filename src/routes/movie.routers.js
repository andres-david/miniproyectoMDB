const { Router } = require("express");
const router = Router();
const movieCtrl = require("../controller/movie.controller");


router.get( "/peliculas/:id", movieCtrl.getMovies );

router.get( "/peliculas", movieCtrl.getMovies );

router.get( "/peliculas/actor/:id", movieCtrl.getActors );

router.get( "/peliculas/director/:id", movieCtrl.getDirectors );

router.get( "/peliculas/guionista/:id", movieCtrl.getWriters );

router.get( "/peliculas/productora/:id", movieCtrl.getProducer );

router.post( "/peliculas", movieCtrl.postMovies );

router.post( "/peliculas/actor", movieCtrl.postActors );

router.post( "/peliculas/director", movieCtrl.postDirectors );

router.post( "/peliculas/guionista", movieCtrl.postWriters );

router.put( "/peliculas", movieCtrl.putMovie );

router.delete( "/peliculas", movieCtrl.deleteMovie );

router.delete( "/peliculas/actor", movieCtrl.deleteActor );

router.delete( "/peliculas/director", movieCtrl.deleteDirector );

router.delete( "/peliculas/guionista", movieCtrl.deleteWriter );

module.exports = router;