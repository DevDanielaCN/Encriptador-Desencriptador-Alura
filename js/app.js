// VARIABLES
let texto = document.getElementById('texto');
let btn_encriptar = document.getElementById('encriptar');
let btn_desencriptar = document.getElementById('desencriptar');
let resultado = document.getElementById('resultado');
let alerta = document.getElementById('alerta');
let btn_copiar = document.getElementById('btn-copiar');
let alerta_contenedor = document.getElementById('alerta-contenedor')
let msg_copy = document.getElementById('msg-copy')
let copy_block = document.getElementById('copy_block');


// LLAMAR FUNCIONES
texto.addEventListener('input', validar)
btn_encriptar.addEventListener('click', encriptar)
btn_desencriptar.addEventListener('click', desencriptar)
// crear una etiqueta p que va a contener el texto encriptado o desencriptado



const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      // solo mostrarlo por 5 segundos
        msg_copy.innerHTML = 'Copiado!';
        msg_copy.classList.add('show');
        
    } catch (error) {
        msg_copy.innerHTML = 'Error al copiar';
        msg_copy.classList.add('show');
    }
    setTimeout(() => {
        msg_copy.classList.remove('show');
    }, 4000);
  };
btn_copiar.addEventListener("click", () => {
    copyToClipboard(resultado.textContent);
  });

  
// FUNCIONES
 
function validar(){

    // si el texto esta vacio mostrar mensaje
    if(texto.value === ''){
        mensaje = 'El texto no puede estar vacio';
        alerta.innerHTML = mensaje;
        alerta_contenedor.classList.add('show'); 
        estadobtn(true);
    }
    // si el texto contiene mayusculas mostrar mensaje
    else if(texto.value.match(/[A-Z]/)){
        mensaje = 'El texto no puede contener mayusculas';
        texto.classList.add('invalido')
        alerta.innerHTML = mensaje;
        alerta_contenedor.classList.add('show'); 
        estadobtn(true);

    }   //si el texto contiene asenctos mostrar mensaje
    else if (texto.value.match(/[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙüÜ]/)){
        mensaje = 'El texto no puede contener acentos o alguno de estos caracteres: áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙüÜ';
        texto.classList.add('invalido')
        alerta.innerHTML = mensaje;
        alerta_contenedor.classList.add('show');
        estadobtn(true);
    }
    else{
        mensaje = 'Solo letras minúsculas y sin acentos';
        alerta.innerHTML = mensaje;
        texto.classList.remove('invalido')
        alerta_contenedor.classList.remove('show');
        estadobtn(false);
    }
}

function estadobtn(valor){
    btn_encriptar.disabled = valor;
    btn_desencriptar.disabled = valor;
}

function encriptar(){
    validar();
    let textoEncriptado = '';

    for (let i = 0; i < texto.value.length; i++) {
        switch (texto.value[i]) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += texto.value[i];
                break;
        }
    }
    //poner el texto encriptado dentro de una etiqueta p

    resultado.innerHTML = textoEncriptado;
    if (!copy_block.classList.contains('work')){
    resultado.classList.add('work');
    }

    if (!copy_block.classList.contains('show')){
        copy_block.classList.add('show');
    }
    
}

function desencriptar(){
    validar();
    let textoDesencriptado = '';

    for (let i = 0; i < texto.value.length; i++) {
        if (texto.value[i] == 'a' && texto.value[i + 1] == 'i') {
            textoDesencriptado += 'a';
            i++;
        } else if (texto.value[i] == 'e' && texto.value[i + 1] == 'n' && texto.value[i + 2] == 't' && texto.value[i + 3] == 'e' && texto.value[i + 4] == 'r') {
            textoDesencriptado += 'e';
            i += 4;
        } else if (texto.value[i] == 'i' && texto.value[i + 1] == 'm' && texto.value[i + 2] == 'e' && texto.value[i + 3] == 's') {
            textoDesencriptado += 'i';
            i += 3;
        } else if (texto.value[i] == 'o' && texto.value[i + 1] == 'b' && texto.value[i + 2] == 'e' && texto.value[i + 3] == 'r') {
            textoDesencriptado += 'o';
            i += 3;
        } else if (texto.value[i] == 'u' && texto.value[i + 1] == 'f' && texto.value[i + 2] == 'a' && texto.value[i + 3] == 't') {
            textoDesencriptado += 'u';
            i += 3;
        } else {
            textoDesencriptado += texto.value[i];
        }
    }

    resultado.innerHTML = textoDesencriptado;
    if (!copy_block.classList.contains('work')){
        resultado.classList.add('work');
        }
    if (!copy_block.classList.contains('show')){
        copy_block.classList.add('show');
    }
}


