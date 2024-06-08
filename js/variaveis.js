// comentário de uma linha
/* comentário de multiplas linhas*/


// tipos de variaveis

var num =1;
var txt = "Olá"
var logico_v = true
var logico_f = false
var lista_mesmo_tipo = ['Arroz','Feijão','Batata']
var lista_tipo_mesclado = ['Nota', 10, 'Nota', 5]
var objeto = {
    "nome": "Francisco",
    "idade":31,
    "altura":1.78,
    "situacao":true,
    "linguage_fav": ['Java', 'JS', 'PHP']
}
var vazio = null;
var indefenido;

// exibindo o conteúdo das variaveis
console.log(num, txt,logico_v,
    logico_f,lista_mesmo_tipo,lista_tipo_mesclado,objeto, vazio, 
    indefenido)


//re-atribuicao de valores
txt = 'Texto substituido'

//re-atribuicao troca no tipo de dado
logico_v = "Verdadeiro"


console.log(txt, logico_v)

// objeto por dentro de objeto

var aluno = {
    "nome": "João",
    "dt_nascimento": "25/05/2002",
    "endereco": 
        {"rua": "abc, 123", 
        "cidade": "São Paulo",
        "uf": "SP" 
    }
}

console.log(aluno)

//escopo das variaveis 

// variaveis locais e globais

// Exemplo de variavel Global - 
// Esta na Raiz do JS, não pertence a nenhum escop
var global= "Eu sou Global"
console.log(global)

//criando uma função
function minha_funcao(){
    // Esta variável esta por dentro de um escopo
    var local = "Eu sou local";
    console.log(local)
}
//chamada da função - utilizada para executar a mesma na raiz
minha_funcao()

// Não é possível chamar uma variavel fora do escopo
// console.log(local, global)

// testando let, var e const
function teste_var(){
    var x = 10
    console.log(x)
    if (x){
        var x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_var()

function teste_let(){
    let x = 10
    console.log(x)
    if (x){
        let x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_let()
function teste_const(){
    const x = 10
    console.log(x)
    if (x){
        const x = 5;
        console.log(x)
    }
    // não permite criar sem inicializar
    // não permite re-atribuição de valores
    //x =11
    console.log(x)
}
teste_const()

