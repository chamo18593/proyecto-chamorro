function saludar(){
    let nombre=prompt("Cual es tu nombre?")
    console.log("Bienvenido a Happy Belly "+nombre)
}

saludar();

const menu=[
{
    codigo:"111111",
    producto:"Donas rosas",
    precio:"200",
},
{
    codigo:"111112",
    producto:"Donas con Chocolate",
    precio:"200",
},
{
    codigo:"111113",
    producto:"Waffles",
    precio:"400",
},
{
    codigo:"111114",
    producto:"Cookies con chips ",
    precio:"200",
},
{
    codigo:"111115",
    producto:"Brownie",
    precio:"300",
},
{
    codigo:"111116",
    producto:"Budin de vainilla",
    precio:"150",
},
{
    codigo:"111117",
    producto:"Budin de chocolate",
    precio:"150",
},
{
    codigo:"111118",
    producto:"Pan de campo",
    precio:"200",
},
{
    codigo:"111119",
    producto:"Bizcochitos de grasa",
    precio:"200",
},
{
    codigo:"111120",
    producto:"Chipa",
    precio:"100",
},
{
    codigo:"111121",
    producto:"croissant con jyq",
    precio:"400",
},
];

for(const comida of menu){
    console.log(comida.producto);
    console.log(comida.precio);
}

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
    alert("\nWaffles\nCookies\nBrownie\nBudin\nDonas");
}

function mostrarComidaSalada()
{
    alert("\nPan\nBizcochitos\nChipa\ncroissant con jyq");
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































