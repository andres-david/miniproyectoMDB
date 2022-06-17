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

    let movie;

    for( let i = 0; i < lista.length ; i++ ){

        movie = lista[i];

        let tr = `<tr>    
            <td>${movie.title}</td>
            <td>${movie.releaseYear} </td>
            <td>${movie.genre}</td>
            <td>${movie.producer}</td>
        </tr>`;

        bodyList.innerHTML += tr;

    }

}

function validar (user){

    let resultado = false;

    if( user.title == '' || user.title == "null" ){
        showToast("AVISO: Campo Titulo no informado", "bg-warning");
    }
    else if( user.releaseYear == '' || user.releaseYear == "null"){
        showToast("AVISO: Campo Estreno no informado", "bg-warning");
    }
    else if( user.genre == '' || user.genre == "null" ){
        showToast("AVISO: Campo Género no informado", "bg-warning");
    }
    else if( user.producer == '' || user.producer == "null" ){
        showToast("AVISO: Campo Productora no informado", "bg-warning");
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

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/peliculas/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result );
        
    } catch (error) {
        console.log( error );
    }
}

async function postMovie(){
    
    try {

        let titulo     = document.querySelector('#titulo').value;
        let fecha      = document.querySelector('#fecha').value;
        let genero     = document.querySelector('#genero').value;
        let productora = document.querySelector('#productora').value;
    
        let nuMovie = {
            title: titulo,
            releaseYear: fecha,
            genre: genero,
            producer: productora
        }

        document.querySelector('#form').reset();
    
        let url   = `http://localhost:3000/peliculas`;

        if( validar( nuMovie ) ){

            let param = {
    
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( nuMovie ),
                method: "POST"
        
            }
    
            let data = await fetch ( url, param );
            let result = await data.json();

            console.log( result );

            if( result.err ){
                showToast("ERROR: " + result.error, "bg-danger");
            }
            else{
                showToast("Pelicula Creada Correctamente", "bg-success");
            }

        }
        
    } catch (error) {
        
        console.log( error );

    }

}

async function putMovie(){

    try {
        let titulo     = document.querySelector('#titulo').value;
        let fecha      = document.querySelector('#fecha').value;
        let genero     = document.querySelector('#genero').value;
        let productora = document.querySelector('#productora').value;
        let id         = document.querySelector('#id').value;

        let nuInfo = {
            "title": titulo ? titulo : null,
            "releaseYear": fecha ? fecha : null,
            "genre": genero ? genero : null,
            "producer": productora ? productora : null,
            "id": id,
        }

        let infoDef = {}  
    
        for(prop in nuInfo){
            
            if(nuInfo[prop] != null){
            infoDef[prop] = nuInfo[prop]
            }
        }

        document.querySelector('#form').reset();
    
        let url   = `http://localhost:3000/peliculas`;

        if( validarId( infoDef ) ){

            let param = {
    
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( infoDef ),
                method: "PUT"
        
            }
    
            console.log( param );
    
            let data   = await fetch ( url, param );
            let result = await data.json();

            console.log( result );
    
            if( result.error ){
                showToast("ERROR: " + result.error, "bg-danger");
            }
            else{
                showToast("Pelicula Actualizada Correctamente", "bg-success");
            }
            
        }
    
    } catch (error) {
        
        console.log( error );

    }

}

async function deleteMovie(){

    try {
        let i = document.getElementById('id').value;

        let indi = {
            "id": i,
        }

        document.querySelector('#form').reset();

        let url   = `http://localhost:3000/peliculas`;

        if( validar(indi) ){

            let param = {
            
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( indi ),
                method: "DELETE"
            }
            
            console.log( param );
            
            let data   = await fetch( url, param );
            let result = await data.json();
    
            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Pelicula Eliminada Correctamente", "bg-success");
            }

        }

    } 
    catch (error) {
        
        console.log( error );

    }

}

