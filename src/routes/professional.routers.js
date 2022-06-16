const { Router } = require("express");
const router = Router();
const professionalCtrl = require("../controller/professional.controller");



router.get( "/profesionales/:id", professionalCtrl.getProfessionals);

router.get( "/profesionales", professionalCtrl.getProfessionals);

router.post( "/profesionales", professionalCtrl.postProfessionals);

router.put( "/profesionales", professionalCtrl.putProfessionals); 

router.delete( "/profesionales", professionalCtrl.deleteProfessionals);


module.exports = router;