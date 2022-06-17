const { request } = require("express");
let mongoose = require("mongoose");

let Professional = require("../model/professionalMDB");


function getProfessionals( request, response ){
    if( request.params.id ){

        Professional.findById( request.params.id )
        .then( (professional) => {
            console.log(professional);
            response.send(professional);
        })
        .catch( (err) => {
            console.log( err );
        })

    }
    else{
        
        Professional.find({})
        .then( ( professional ) => {
            console.log( professional );
            response.send( professional );
        })
        .catch( (err) => {
            console.log( err );
        })

    }

}


function postProfessionals( request, response ){
    
    console.log( request.body );

    let professional = new Professional({
        name: request.body.name,
        surname: request.body.surname,
        profession: request.body.profession,
        nationality: request.body.nationality,
        genre: request.body.genre
    });

    professional.save()
    .then( (professional) => {
        console.log("Profesional guardado correctamente");
        console.log( professional );
        response.send( professional );
    })
    .catch( (error) => {
        console.log(error);
    })

}

function putProfessionals( request, response ){

    console.log(request.body);

    let name = request.body.name;
    let surname = request.body.surname;
    let profession = request.body.profession;
    let nationality = request.body.nationality;
    let genre = request.body.genre;

    Professional.findByIdAndUpdate(request.body.id, {
        name: name,
        surname: surname,
        profession: profession,
        nationality: nationality,
        genre: genre
    })
    .then( (professional) => {
        console.log("Profesional actualizado correctamente");
        console.log(professional);
        response.send(professional);
    })
    .catch( (error) => {
        console.log(error);
    })

}


function deleteProfessionals( request, response ){

    console.log(request.body);

    Professional.findByIdAndDelete(request.body.id)
    .then( (professional) => {
        console.log("Profesional eliminado correctamente");
        console.log(professional);
        response.send(professional);
    })
    .catch( (error) => {
        console.log(error);
    })
    
}




module.exports = {getProfessionals, postProfessionals, putProfessionals, deleteProfessionals}