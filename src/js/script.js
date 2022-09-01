function encriptar() {
    var text0 = document.querySelector("#text").value;
    var aux2 = text0.split('');
    var textoEncriptado = '';
    var vaux = text0.replace(/\s+/g,"") 

    if (vaux.length === 0) {
        alert("Debes ingresar un texto");
    }
    else {
        aux2.forEach(letra => {
            switch (letra) {
                case "a":
                    textoEncriptado = textoEncriptado + "ai";
                    break;
                case "e":
                    textoEncriptado = textoEncriptado + "enter";
                    break;
                case "i":
                    textoEncriptado = textoEncriptado + "imes";
                    break;
                case "o":
                    textoEncriptado = textoEncriptado + "ober";
                    break;
                case "u":
                    textoEncriptado = textoEncriptado + "ufat";
                    break;
                default:
                    textoEncriptado = textoEncriptado + letra;

            }
        });
        document.querySelector("#resultado").value = textoEncriptado;;
        hide("muneco");
        hide("nofound");
        hide("instruccion");
        document.getElementById("button3").style.display = "";

    }
}

function desencriptar() {
    var text1 = document.querySelector("#text").value;
    var textoDes = text1.replace(/ai/gi, 'a')
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
        

    document.querySelector("#resultado").value = textoDes;
}


function copiar() {
    var forcopy = document.getElementById("resultado");

    forcopy.select();
    document.execCommand('copy')

}

function validartexto(e) {
    var key = e.keyCode || e.which;
    regla = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46],
        tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }

}

function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}

