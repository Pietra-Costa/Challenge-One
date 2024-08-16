document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.querySelector(".texto");
    const btnCriptografar = document.querySelector(".cripto");
    const btnDescriptografar = document.querySelector(".descripto");
    const asideBox = document.querySelector(".aside-box");

   
    const conteudoOriginalAside = `
        <img class="meninalogo" src="img/High quality products 1 1.svg" alt="">
        <p class="titulo">Nenhuma mensagem encontrada</p>
        <p class="paragrafo">Escreva um texto que você deseja criptografar ou discriptografar</p>
    `;

   
    function criptografarTexto(texto) {
        let textoCriptografado = texto.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");
        return textoCriptografado;
    }


    function descriptografarTexto(texto) {
        let textoDescriptografado = texto.replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ai/g, "a")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u");
        return textoDescriptografado;
    }

    function exibirMensagem(mensagem) {
        if (mensagem) {
            asideBox.innerHTML = `
                <p class="titulo">${mensagem}</p>
                <button class="btn-copy">Copiar</button>
            `;

            
            document.querySelector(".btn-copy").addEventListener("click", function() {
                navigator.clipboard.writeText(mensagem)
                    .then(() => alert("Mensagem copiada!"))
                    .catch(err => console.error("Erro ao copiar mensagem: ", err));
            });
        } else {
            
            asideBox.innerHTML = conteudoOriginalAside;
        }
    }

    
    btnCriptografar.addEventListener("click", function(event) {
        event.preventDefault();
        const texto = inputTexto.value;
        if (texto) {
            const textoCriptografado = criptografarTexto(texto);
            exibirMensagem(textoCriptografado);
        } else {
            exibirMensagem(""); 
        }
    });

    
    btnDescriptografar.addEventListener("click", function(event) {
        event.preventDefault();
        const texto = inputTexto.value;
        if (texto) {
            const textoDescriptografado = descriptografarTexto(texto);
            exibirMensagem(textoDescriptografado);
        } else {
            exibirMensagem(""); 
        }
    });
});
