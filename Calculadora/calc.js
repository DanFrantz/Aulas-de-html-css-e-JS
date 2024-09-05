let visor=document.getElementById("teclado");
let resultado = 0;
let operacaoAtual = null;
let novoNumero = true;
let original = 0;
let simbolosOperacao = ['+', '-', '×', '÷'];

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
            console.log("else if")
        }
        
    }
    
    function addNumero(numAdicionar){
            visor.textContent=visor.textContent+numAdicionar;
        
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

    function porcentagem() {
        if(visor.textContent.endsWith("%")){
            alert("Não é possível usar mais de um símbolo de porcentagem seguido")
        }

        else if(visor.textContent==""){
            alert("Não é possível fazer operações de porcentagem sem números")
        }      
        
        else if(visor.textContent != ""){
            visor.textContent+="%";
        }
    }
 

    function raizQuad() {
        
            visor.textContent+="√";
            

    }
 
        
    function calcResultado(){
        if(ultimoCaractereEhNumero){
            visor.textContent=eval(visor.textContent)
        }
        else if(ultimoCaractereEhNumero==false){
            alert("Você não completou")
        }
        /*for(let i=0;i<visor.textContent.length;i++){
            if(charAt[visor.textContent.i]==="√"){
                for()
            }*/
        console.log(eval("14^100"))
        }
        

    