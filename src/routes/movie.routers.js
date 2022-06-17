const { Router } = require("express");
const router = Router();
const movieCtrl = require("../controller/movie.controller");


router.get( "/peliculas/:id", movieCtrl.getMovies );

router.get( "/peliculas", movieCtrl.getMovies );

router.get( "/peliculas/actor/:id", movieCtrl.getActors );

router.get( "/peliculas/director/:id", movieCtrl.getDirectors );

router.get( "/peliculas/guionista/:id", movieCtrl.getWriters );

router.get( "/peliculas/productora/:id", movieCtrl.getProducer );