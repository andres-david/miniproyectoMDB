// const showToast = require("../../../toast");

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

let printTable = ( lista ) => {

    let bodyList = document.querySelector('.body__list');

    bodyList.innerHTML = '';

    document.querySelector('.list__profesionales').style.display = "block";

    let profesional;

    for( let i = 0; i < lista.length ; i++ ){

        profesional = lista[i];

        let tr = `<tr>    
            <td>${profesional.name}</td>
            <td>${profesional.surname} </td>
            <td>${profesional.profession}</td>
            <td>${profesional.nationality}</td>
            <td>${profesional.genre}</td>
        </tr>`;

        bodyList.innerHTML += tr;

    }

}

function validar (user){

    let resultado = false;

    if( user.name == '' || user.name == "null" ){
        showToast("AVISO: Campo nombre no informado", "bg-warning");
    }
    else if( user.surname == '' || user.surname == "null"){
        showToast("AVISO: Campo apellido no informado", "bg-warning");
    }
    else if( user.profession == '' || user.profession == "null" ){
        showToast("AVISO: Campo profesión no informado", "bg-warning");
    }
    else if( user.nationality == '' || user.nationality == "null" ){
        showToast("AVISO: Campo nacionalidad no informado", "bg-warning");
    }
    else if( user.genre == '' || user.genre == "null" ){
        showToast("AVISO: Campo genero no informado", "bg-warning");
    }
    else{
        resultado = true;
    }
    
    return resultado;
}

function validarId (user){

    let resultado = false;

    if( user.id == '' || user.id == "null" ){
        showToast("AVISO: Campo Id no informado", "bg-warning");
    }
    else{
        resultado = true;
    }
    
    return resultado;
}


async function getMovie(){

    const id  = document.querySelector('#id').value;

    console.log(id);

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/profesionales/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        printTable( result );
        
    } catch (error) {
        console.log( error );
    }
}

// async function postProfesional(){
    
//     try {

//         let nombre       = document.querySelector('#nombre').value;
//         let apellido     = document.querySelector('#apellido').value;
//         let profesion    = document.querySelector('#profesion').value;
//         let nacionalidad = document.querySelector('#nacionalidad').value;
//         let genero       = document.querySelector('#genero').value;
    
//         let nuProfessional = {
//             name: nombre,
//             surname: apellido,
//             profession: profesion,
//             nationality: nacionalidad,
//             genre: genero
//         }

//         document.querySelector('#form').reset();
    
//         let url   = `http://localhost:3000/profesionales`;

//         if( validar( nuProfessional ) ){

//             let param = {
    
//                 headers:{
//                     "content-type": "application/json; charset=UTF-8"
//                 },
//                 body: JSON.stringify( nuProfessional ),
//                 method: "POST"
        
//             }
    
//             let data = await fetch ( url, param );
//             let result = await data.json();

//             console.log( result );

//             if( result.err ){
//                 showToast("ERROR: " + result.error, "bg-danger");
//             }
//             else{
//                 showToast("Profesional Creado Correctamente", "bg-success");
//             }

//         }
        
//     } catch (error) {
        
//         console.log( error );

//     }

// }

// async function putProfesional(){

//     try {
//         let nombre       = document.querySelector('#nombre').value;
//         let apellido     = document.querySelector('#apellido').value;
//         let profesion    = document.querySelector('#profesion').value;
//         let nacionalidad = document.querySelector('#nacionalidad').value;
//         let genero       = document.querySelector('#genero').value;
//         let id           = document.querySelector('#id').value;

//         let nuInfo = {
//             "name": nombre ? nombre : null,
//             "surname": apellido ? apellido : null,
//             "profession": profesion ? profesion : null,
//             "nationality": nacionalidad ? nacionalidad : null,
//             "genre": genero ? genero : null,
//             "id": id,
//         }

//         let infoDef = {}  
    
//         for(prop in nuInfo){
            
//             if(nuInfo[prop] != null){
//             infoDef[prop] = nuInfo[prop]
//             }
//         }

//         document.querySelector('#form').reset();
    
//         let url   = `http://localhost:3000/profesionales`;

//         if( validarId( infoDef ) ){

//             let param = {
    
//                 headers:{
//                     "content-type": "application/json; charset=UTF-8"
//                 },
//                 body: JSON.stringify( infoDef ),
//                 method: "PUT"
        
//             }
    
//             console.log( param );
    
//             let data   = await fetch ( url, param );
//             let result = await data.json();

//             console.log( result );
    
//             if( result.error ){
//                 showToast("ERROR: " + result.error, "bg-danger");
//             }
//             else{
//                 showToast("Usuario Actualizado Correctamente", "bg-success");
//             }
            
//         }
    

//     } catch (error) {
        
//         console.log( error );

//     }

// }

// async function deleteProfesional(){

//     try {
//         let i = document.getElementById('id').value;

//         let indi = {
//             "id": i,
//         }

//         document.querySelector('#form').reset();

//         let url   = `http://localhost:3000/profesionales`;

//         if( validar(indi) ){

//             let param = {
            
//                 headers:{
//                     "content-type": "application/json; charset=UTF-8"
//                 },
//                 body: JSON.stringify( indi ),
//                 method: "DELETE"
//             }
            
//             console.log( param );
            
//             let data   = await fetch( url, param );
//             let result = await data.json();
    
//             if( result.err ){
//                 showToast("ERROR: " + result.err, "bg-danger");
//             }
//             else{
//                 showToast("Usuario Eliminado Correctamente", "bg-success");
//             }

//         }

//     } 
//     catch (error) {
        
//         console.log( error );

//     }

// }

