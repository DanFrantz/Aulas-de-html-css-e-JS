let visor=document.getElementById("teclado");

// Função para mudar o tema
function mudarTema(tema) {
    let content = document.querySelector(".content");
    content.className = `content ${tema}`; // Adiciona a classe do tema ao elemento
}

function ultimoCaractereEhNumero() {
    // Verifica se o texto não está vazio
        if (visor.textContent.length === 0) {
            return false;
        }
    
        // Obtém o último caractere
        let ultimoCaractere = visor.textContent.charAt(visor.textContent.length - 1);
    
        // Verifica se o último caractere é um dígito
        return !isNaN(ultimoCaractere) && ultimoCaractere !== ' ';
    }
    
    function addVirgula(){
        if (ultimoCaractereEhNumero()==false){
            alert("Não é possível usar vírgula sem usar números")
            console.log("if")
        }
        else if(ultimoCaractereEhNumero()){
            visor.textContent=visor.textContent+".";
        }
        
    }
    
    function addNumero(numAdicionar){
        //Adiciona um número ao final da string
        visor.textContent=visor.textContet+numAdicionar;
        
    }

    function limparNumeros(){
        visor.textContent="";
    }

    function soma(){
        if(visor.textContent.endsWith("+")){
            alert("Não da pra colocar mais de um símbolo de soma seguido")
        }

        else if(visor.textContent==""){
            alert("Não é possível fazer operações de soma sem números")
        }      
        
        else if(visor.textContent != ""){
            visor.textContent+="+";
        }
    }

    function subtracao(){
        if(visor.textContent.endsWith("-")){
            alert("Não é possível usar mais de um símbolo de subtração seguido")
        }

        else if(visor.textContent===""){
            alert("Não é possível fazer operações de subtração sem números")
        }      
        
        else if(visor.textContent != ""){
            visor.textContent+="-";
        }
    }

    function multiplicacao(){
        if(visor.textContent.endsWith("*")){
            alert("Não é possível usar mais de uma multiplicação seguida")
        }
        else if(visor.textContent===("")){
            alert("Não é possível fazer a multiplicação sem números");
        }
        else if(visor.textContent!=""){
            visor.textContent+="*";
        }
    }

    function divisao(){
        if(visor.textContent.endsWith("*")){
            alert("Não é possível usar mais de uma divisão seguida")
        }
        else if(visor.textContent===("")){
            alert("Não é possível fazer a divisão sem números");
        }
        else if(visor.textContent!=""){
            visor.textContent+="/";
        }
    }

    function mudarSinal(){
        if (visor.textContent.startsWith("+")) {
            // Trocar + por -
            visor.textContent = "-" + visor.textContent.slice(1);
            console.log("Trocado + por -");
        } else if (visor.textContent.startsWith("-")) {
            // Trocar - por +
            visor.textContent = "+" + visor.textContent.slice(1);
            console.log("Trocado - por +");
        } else {
            // Adicionar + no início
            visor.textContent = "+" + visor.textContent;
            console.log("Adicionado + no início");
        }
    }
    function potencia(){
        if(visor.textContent.endsWith("**")){
            alert("Não é possível usar mais de uma potenciação seguida")
        }

        else if(visor.textContent==""){
            alert("Não é possível fazer operações de potenciação sem números")
        }      
        
        else if(visor.textContent != ""){
            visor.textContent+="**";
        }
    }


    function limparExpressao(){
        for(let i=visor.textContent.length-1;i>0;i--){
            if(visor.textContent.i==="-"){
                visor.textContent.slice(i);
                break;
            }
            else if(visor.textContent.i==="+"){
                visor.textContent.slice(i);
                break;
            }
            else if(visor.textContent.i==="*"){
                visor.textContent.slice(i);
                break;
            }
            else if(visor.textContent.i==="/"){
                visor.textContent.slice(i);
                break;
            }
        }
    }
    function delet(){
        visor.textContent=visor.textContent.slice(0,-1)
    }
        
    function calcResultado(){
        if(ultimoCaractereEhNumero){
            visor.textContent=eval(visor.textContent)
        }
        else if(ultimoCaractereEhNumero==false){
            alert("Você não completou a operação")
        }
        

        
    }
        

    