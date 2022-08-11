console.group("String")

let string = "Teste";
console.log(string + " é uma variavel tipo " + typeof (string));
if (string != 2) {
console.log("Essa variavel com certeza não é um numero");
} else {
    console.log("Essa variavel pode ser um numero");
}
console.groupEnd()
console.group("Number")

let number = 16;
console.log(number + " é uma variavel tipo " + typeof (number));
if (number < 18) {
    console.log("Você é menor de idade");
} else {
    console.log("Você é maior de idade");
}
console.groupEnd()
console.group("Boolean")

let boolean = true;
console.log(boolean + " é uma variavel tipo " + typeof (boolean));
if (boolean == true) {
    console.log("O resultado deu verdadeiro");
} else {
    console.log("O resultado deu falso");
}
console.groupEnd()
console.group("Array")

let array = ["Teste 1", "Teste 2"];
console.log(array + " é uma variavel tipo " + typeof (array));
array.forEach(item => {
    
    if (item == "Teste 1") {

    console.log("Teste 1 foi encontrado na lista");

} else {

    console.log("Não foi encontrado nenhum item com esse nome");
}
    
    });

if (array.lenght == "Teste 2") {
    console.log("1");

} else {

    console.log("2");

}
console.groupEnd()
console.group("Object")
let object = null;
console.log(object + " é uma variavel tipo " + typeof (object));
if (object != null) {
console.log("Esse object não esta vazio");
} else {
    console.log("Esse object esta vazio");
}
console.groupEnd()

function switch_string() {

    switch (string) {
        case "professor":
            console.log("escolheu professor");
            break;
        case "oi professor":
            console.log("escolheu oi professor");
            break;
        default:
            console.warn("escolheu errado");
            break;
    }
}

function switch_number() {
    switch (number) {
        case 1:
            console.log("escolheu 1");
            break;
        case 42:
            console.log("escolheu 42 a resposta universal");
            break;
        default:
            console.warn("escolheu errado");
            break;
    }

}

function percorrer_for() {
    for (let contador = 0; contador < arrays.length; contador++) {
        const element = arrays[contador];
        console.log(contador, arrays[contador]);
    }

}

console.group("Localizar elemento por ID")
    let ler = document.getElementById("teste")
    console.log(ler);
    console.log("Conteudo textContent", ler.textContent);
    console.log("Conteudo com elementos internos do HTML", ler.innerHTML);

console.groupEnd()
  
console.group("Localizar elemento por tag")
let ler_tag = [...document.getElementsByTagName("p")]
ler_tag.forEach(paragrafo => {
    console.log(paragrafo.textContent);
    console.log(paragrafo.innerHTML);
});
console.groupEnd()

console.group("Localizar elemento por classe")
let ler_classes = [...document.getElementsByClassName("p-5")]
console.log(ler_classes.textContent);
console.log(ler_classes.innerHTML);
ler_classes.forEach(paragrafo2 => {
    console.log(paragrafo2.textContent);
    console.log(paragrafo2.innerHTML);
});
console.groupEnd()