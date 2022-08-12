function saludar(){
    let nombre=prompt("Cual es tu nombre?")
    console.log("Bienvenido a Happy Belly "+nombre)
}

saludar();

const menu=[
{
    codigo:"111111",
    nombre:"donas rosas",
    precio:"200",
    tipo:"dulce",
},
{
    codigo:"111112",
    nombre:"Donas con Chocolate",
    precio:"200",
    tipo:"dulce",
},
{
    codigo:"111113",
    nombre:"Waffles",
    precio:"400",
    tipo:"dulce",
},
{
    codigo:"111114",
    nombre:"Cookies con chips ",
    precio:"200",
    tipo:"dulce",
},
{
    codigo:"111115",
    nombre:"Brownie",
    precio:"300",
    tipo:"dulce",
},
{
    codigo:"111116",
    nombre:"Budin de vainilla",
    precio:"150",
    tipo:"dulce",
},
{
    codigo:"111117",
    nombre:"Budin de chocolate",
    precio:"150",
    tipo:"dulce",
},
{
    codigo:"111118",
    nombre:"Pan de campo",
    precio:"200",
    tipo:"salado",
},
{
    codigo:"111119",
    nombre:"Bizcochitos de grasa",
    precio:"200",
    tipo:"salado",
},
{
    codigo:"111120",
    nombre:"Chipa",
    precio:"100",
    tipo:"salado",
},
{
    codigo:"111121",
    nombre:"croissant con jyq",
    precio:"400",
    tipo:"salado",
},
];

// Buscador 
menu.forEach((producto)=>console.log(producto.nombre));

const tipode=menu.filter((producto)=>producto.tipo=="dulce");
console.log(tipode);

console.table(tipode);


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



//Ejemplo del pedido 

const preciosComida=[200,400,150];

let total=0;
function sumarTotal(precio){
    total+=precio;
}

function realizar(operacion,lista){
    for(const elemento of lista){
        operacion(elemento);
    }
}

realizar(sumarTotal,preciosComida);
console.log("la suma de tus productos es $"+total);


let ahora=new Date();
console.log(ahora);


































