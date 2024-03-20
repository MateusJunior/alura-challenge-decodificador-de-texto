function criptografar() {
    // Obter o valor do textarea
    var texto = document.getElementById('texto-input').value;
    var textCriptografado = "";
    // Verificar se o textarea não está vazio
    if(texto.trim() !== ''){
        // Mostrar o div de texto encontrado
        document.getElementById('texto-encontrado').style.display = 'block';
        
        // Esconder o div de texto não encontrado
        document.getElementById('texto-naoencontrado').style.display = 'none';

        for (var i = 0; i < texto.length; i++) {
            console.log(texto[i]);
            if(texto.charAt(i)=='a'){
                textCriptografado += "ai";
            }else if(texto.charAt(i)=="e"){
                textCriptografado += "enter";
            }else if(texto.charAt(i)=="i"){
                textCriptografado += "imes";
            }else if(texto.charAt(i)=="o"){
                textCriptografado += "ober";
            }else if(texto.charAt(i)=="u"){
                textCriptografado += "ufat";
            }
            else{
                textCriptografado += texto.charAt(i)
            }
        }        
        document.getElementById('texto-output').value = textCriptografado;
        console.log(textCriptografado);
    }else{
        document.getElementById('texto-encontrado').style.display = 'none';
        
        // Esconder o div de texto não encontrado
        document.getElementById('texto-naoencontrado').style.display = 'block';
    }
}

function descriptografar() {
 // Obter o valor do textarea
 var texto = document.getElementById('texto-input').value;
 var textoDescriptografado = "";

 // Verificar se o textarea não está vazio
 if(texto.trim() !== ''){
     // Mostrar o div de texto encontrado
     document.getElementById('texto-encontrado').style.display = 'block';
     // Esconder o div de texto não encontrado
     document.getElementById('texto-naoencontrado').style.display = 'none';
     var i = 0;
     while (i < texto.length) {
        if(texto.substring(i, i+2) === "ai") {
            textoDescriptografado += "a";
            i += 2;
        } else if(texto.substring(i, i+5) === "enter") {
            textoDescriptografado += "e";
            i += 5;
        } else if(texto.substring(i, i+4) === "imes") {
            textoDescriptografado += "i";
            i += 4;
        } else if(texto.substring(i, i+4) === "ober") {
            textoDescriptografado += "o";
            i += 4;
        } else if(texto.substring(i, i+4) === "ufat") {
            textoDescriptografado += "u";
            i += 4;
        } else {
            textoDescriptografado += texto.charAt(i);
            i++;
        }
     }
     
     document.getElementById('texto-output').value = textoDescriptografado;

 }else{
     document.getElementById('texto-encontrado').style.display = 'none';
     
     // Esconder o div de texto não encontrado
     document.getElementById('texto-naoencontrado').style.display = 'block';
 }
}

function mostrarElemento(element){
    document.getElementById(element).style.display = 'block';
}

function esconderElemento(element){
    document.getElementById(element).style.display = 'none';
}

function copiarTexto(elemento) {
    // Selecionar o conteúdo da textarea
    var texto = document.getElementById(elemento);
    texto.select();
    // Copiar o texto selecionado para a área de transferência
    document.execCommand("copy");
}