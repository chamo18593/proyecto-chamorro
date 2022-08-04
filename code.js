function saludar(){
    let nombre=prompt("Cual es tu nombre?")
    console.log("Bienvenido a Happy Belly "+nombre)
}

saludar();

CatalogoDeComida();
function CatalogoDeComida()
{
    let CatalogoDeComida = prompt("Comida dulce o salada?");

    if(CatalogoDeComida == "dulce")
    {
        mostrarComidaDulce();
    }
    else if(CatalogoDeComida == "salada")
    {
        mostrarComidaSalada();
    }
    else
    {
        console.log("El valor ingresado no es valido");
        CatalogoDeComida();
    }
}

function mostrarComidaDulce()
{
    alert("\nWaffles\nCookies\nBrownie\nBudin");
}

function mostrarComidaSalada()
{
    alert("\nPan\nPizza\nChipa\nSanguchitos");
}


let pedido="";
let palabra=prompt("Ingrese su pedido (s-para terminar el pedido)");

while(palabra!="s"){
    pedido = pedido + " " + palabra;
    palabra=prompt("Ingresa otro producto o finaliza el pedido (s-para terminar el pedido)");
}

alert("su pedido es: "+pedido);

//

let saludo = () => {
    let nombre=prompt("Escriba su direccion");
    let apellido=prompt("Escriba apellido");
    let nombreCompleto=nombre+" "+apellido;
    return nombreCompleto
}

let nomCompleto=saludo();
alert(nomCompleto);

const listaDeComidaDulce = ["waffles","brownie","cookies","budin"];
console.log(listaDeComidaDulce);

const listaDeComidaSalada = ["pan","pizza","chipa","sanguchitos"];
console.log(listaDeComidaSalada);
































