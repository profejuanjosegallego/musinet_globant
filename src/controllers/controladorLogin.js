//Proceso para utilizar el DOM y validar el formulario de login

let cajaNombreUsuario=document.getElementById("nombre")
let cajaCorreoUsuario=document.getElementById("correo")
let cajaContraseñaUsuario=document.getElementById("contraseña")

//Necesito detectar el evento de clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",(evento)=>{
    evento.preventDefault()
    let nombre=cajaNombreUsuario.value
    let correo=cajaCorreoUsuario.value
    let contraseña=cajaContraseñaUsuario.value
    
    //validar los valores capturados
    //si alguno falla mensaje de error y cambio de css

    if(nombre==""&&correo==""&&contraseña==""){
        cajaNombreUsuario.classList.add("is-invalid")
        cajaCorreoUsuario.classList.add("is-invalid")
        cajaContraseñaUsuario.classList.add("is-invalid")
    }else{

        cajaNombreUsuario.classList.remove("is-invalid")
        cajaCorreoUsuario.classList.remove("is-invalid")
        cajaContraseñaUsuario.classList.remove("is-invalid")

        let objetoFormulario={
            nombre,
            correo,
            contraseña
        }
        console.log(objetoFormulario)
    }


    //si todo bn capturo los 3 valores y los envio al servicio
    
})

