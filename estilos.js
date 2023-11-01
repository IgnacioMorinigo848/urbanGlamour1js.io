function iniciarSesion(){
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const correo = document.getElementById("email");
  const contraseña = document.getElementById("password");
  const btn = document.getElementById("btn");

  const warnnings1 = document.getElementById("warnning1");
  const warnnings2 = document.getElementById("warnning2");
  const warnnings3 = document.getElementById("warnning3");
  



  btn.addEventListener("click", e=>{
    e.preventDefault();
    if (warnning1 || warnning2){
      reiniciar(correo,warnning1);
      reiniciar(contraseña, warnnings2);
    }
    if(!emailRegExp.test(correo.value)){
      modificacionDeEstilos(correo,warnnings1,'Correo Inválido.')
    }  
    if(!passwordRegExp.test(contraseña.value)){
      modificacionDeEstilos(password,warnnings2,'Contraseña Inválida.')
    }
    if(passwordRegExp.test(contraseña.value) && emailRegExp.test(correo.value)){
      warnnings3.textContent = "Ha Iniciado Sesion Con Exito."
    }

  }); 
}

function registrarse() {
  // Expresiones Regulares
  const nombreApellidoExpresion = /^[A-Za-z\s]+$/;
  const telefonoExpresion = /^\d{1,10}$/;
  const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Datos
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const fecha = document.getElementById("fechaNacimiento");
  const codigoArea = document.getElementById("codigoArea");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("email");
  const contraseña = document.getElementById("password");

  // Mensajes
  const warnningN = document.getElementById("warnningN");
  const warnningA = document.getElementById("warnningA");
  const warnningF = document.getElementById("warnningF");
  const warnningCA = document.getElementById("warnningCA");
  const warnningT = document.getElementById("warnningT");
  const warnningC = document.getElementById("warnningC");
  const warnningPas = document.getElementById("warnningPas");
  const warnningBtn = document.getElementById("warnningBtn");

  const btn = document.getElementById("btn"); 

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Limpiar mensajes de advertencia

    if(warnningN || warnningA || warnningF || warnningCA || warnningT || warnningC || warnningPas){
    reiniciar(nombre , warnningN);
    reiniciar(apellido, warnningA);
    reiniciar(fecha, warnningF);
    reiniciar(codigoArea ,warnningCA);
    reiniciar(telefono, warnningT);
    reiniciar(correo,warnningC);
    reiniciar(contraseña, warnningPas);
    }

    if (!nombreApellidoExpresion.test(nombre.value)) {
      modificacionDeEstilos(nombre, warnningN,"Nombre Inválido.");
    }
    if (!nombreApellidoExpresion.test(apellido.value)) {
      modificacionDeEstilos(apellido,warnningA,"Apellido Inválido.");
      
    }
    if (!regexFecha.test(fecha.value)) {
      modificacionDeEstilos(fecha,warnningF,"Fecha Inválida.");
    }
    if (codigoArea.value === "") {
      modificacionDeEstilos(codigoArea,warnningCA,"Seleccione su Región.");
    }
    if (!telefonoExpresion.test(telefono.value)) {
      modificacionDeEstilos(telefono,warnningT,"Teléfono Inválido.");
    }
    if(!emailRegExp.test(correo.value)){
      modificacionDeEstilos(correo,warnningC,"Correo Inválido.");
    }
    if(!passwordRegExp.test(contraseña.value)){
      modificacionDeEstilos(contraseña,warnningPas,"Contraseña Invalida.")
    }
    if(nombreApellidoExpresion.test(nombre.value) && nombreApellidoExpresion.test(apellido.value) && regexFecha.test(fecha.value) &&
    codigoArea.value != "" && telefonoExpresion.test(telefono.value) && emailRegExp.test(correo.value) && passwordRegExp.test(contraseña.value)
    ){
      warnningBtn.textContent = "Se ha registrado Exitosamente."
      warnningBtn.style.color = "#0000 !important" ;
      warnningBtn.style.marginTop = "70px !important";
    }
  });
}


function modificacionDeEstilos(inputMod, mensajeColor, mensajeError){
    mensajeColor.style.color = "#f00";
    inputMod.style.borderBottom = "2px solid #f00";
    mensajeColor.textContent = mensajeError;
}

function reiniciar(inputMod, mensaje){
  mensaje.textContent = "";
  inputMod.style.borderBottom = " 2px solid #1a1919";
}



registrarse();
iniciarSesion();
