function CamposVacios(){
    let campVacios = false;
    let txtUser = document.getElementById('usuario');
    let txtEmail = document.getElementById('email');
    if(txtUser.value=="" || txtEmail.value==""){
        campVacios = true;
    }
    return campVacios;
}

function CamposValidos(){
    let respuesta = true; 
    let txtEmail = document.getElementById('email');
    if(txtEmail.value.indexOf('@')<0){
        respuesta = false;
    }else if(txtEmail.value.indexOf('.')<0){
        respuesta = false;
    }
    return respuesta;
}

function AddListUser(){
    let showMsg = document.getElementById('mensaje');
    let txtUser = document.getElementById('usuario');
    let txtEmail = document.getElementById('email');
    if(CamposVacios()){
        showMsg.innerHTML = 'Debe llenar todos los campos';
        setTimeout(()=>showMsg.innerHTML = '',2000);
    }else if(!CamposValidos()){
        showMsg.innerHTML = 'Formato de correo no válido'
        setTimeout(()=>showMsg.innerHTML = '',2000); 
    }else{
        let parrafo = document.createElement('p');
        let nodeContenido = document.createTextNode(txtUser.value);
        parrafo.appendChild(nodeContenido);

        let s_pan = document.createElement('span');
        let txtS_pan = document.createTextNode(txtEmail.value);
        s_pan.appendChild(txtS_pan);

        let fuente = "../img/"+ document.querySelector("[name='chkImg']:checked").value;
        let imagen = document.createElement('img');
        imagen.src = fuente;

        let nuevoArticulo = document.createElement('article');
        nuevoArticulo.appendChild(imagen); 
        nuevoArticulo.appendChild(parrafo);
        nuevoArticulo.appendChild(s_pan);

        document.getElementById('listUser').appendChild(nuevoArticulo);
        showMsg.innerHTML = 'Agregado exitosamente';
        setTimeout(()=>showMsg.innerHTML = '',2000); 
    }
}

