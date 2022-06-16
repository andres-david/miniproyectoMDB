const { Router } = require("express");
const router = Router();
const professionalCtrl = require("../controller/professional.controller");



router.get( "/profesinales/:id", professionalCtrl.getPhotos);

router.get( "/profesionales", professionalCtrl.getPhotos);

router.post( "/profesionales", professionalCtrl.postPhotos);

router.put( "/profesionales", professionalCtrl.putPhotos ); 

router.delete( "/profesionales", professionalCtrl.deletePhotos );


module.exports = router;