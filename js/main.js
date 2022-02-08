//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Federico Sabato - CoderHouse - Proyecto
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const URLGET = "https://api.binance.com/api/v3/ticker/price"; //API de valores de cryptos

const cryptos= []; //Creo el Array de las crypto
const pairs= []; //Creo el Array de los pares
const pricesArray=[]; //Array para precios a penas arranca la web

const wallet= []; //Creo la wallet

let inputMon; //Dinero Ingresado
let selectedPair; //Par de moneda utilizado dependiendo del pais o el dinero a ingresar
let selectedPairPrice; //VALOR EN DOLAR del Par de moneda utilizado dependiendo del pais o el dinero a ingresar

let cryptoValue; //Ambas variables utilizadas para guardar los precios de las crypto a comprar
let moneyValue;

let profits; //Suma de las cotizaciones de la WALLET

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Name: Nombre
//Acr: Acronimo
//Price: Precio de Mercado
//State: Estado -> 1: En Alza
//                 2: En Baja

class crypto{
    constructor(id,name,acr,price,state){
        this.id=id;
        this.name=name;
        this.acronym=acr;
        this.price= price;
        this.state=state;
    }
}
class pair{
    constructor(id,name,acr,price){
        this.id=id;
        this.name=name;
        this.acronym=acr;
        this.price= price;
    }
}
class walletCrypto{
    constructor(name,qty,price){
        this.name=name;
        this.quantity=qty;
        this.price= price;
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Creo los objetos para crypto
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let btc = new crypto(0,"Bitcoin","BTC",56342.34,1);
let eth = new crypto(1,"Ethereum","ETH",4140.45,2);
let ada = new crypto(2,"Cardano","ADA",1.63,2);
let sol = new crypto(3,"Solana","SOL",197.81,1);
let shiba = new crypto(4,"Shiba INU","SHIBA",0.00004,2);
let alpha = new crypto(5,"Alpha Finance Lab","ALPHA",0.6873,1);
let cake = new crypto(6,"PancakeSwap","CAKE",12.60,1);
let doge = new crypto(7,"Dogecoin","DOGE",0.1274,2);
let link = new crypto(8,"Chainlink","LINK",19.34,1);
let zen = new crypto(9,"Horizen","ZEN",67.86,2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Creo los objetos para pair
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let usd = new pair(1,"Dolar Estadounidense","USD",1);
let ars = new pair(2,"Peso Argentino","ARS",102.23);
let clp = new pair(3,"Peso Chileno","CLP",865.42);
let brl = new pair(4,"Real Brasilero","BRL",5.67);
let mxn = new pair(5,"Peso Mexicano","MXN",5.67);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Agrego todas las crypto a un Array = cryptos[]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

cryptos.push(btc);
cryptos.push(eth);
cryptos.push(ada);
cryptos.push(sol);
cryptos.push(shiba);
cryptos.push(alpha);
cryptos.push(cake);
cryptos.push(doge);
cryptos.push(link);
cryptos.push(zen);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Agrego todas los pares a un Array = pairs[]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

pairs.push(usd);
pairs.push(ars);
pairs.push(clp);
pairs.push(brl);
pairs.push(mxn);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Obtengo valores de Cryptos en USDT. 
//Escribo en WALLET.JS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$.get(URLGET,function(response,state){

    if(state === "success"){

        let data = response;

            //Tomamos datos de API Binance

            let lastPrice1 =data[11].price;
            let lastPrice2 =data[12].price;
            let lastPrice3 =data[296].price;
            let lastPrice4 =data[779].price;
            let lastPrice5 =data[1419].price;
            let lastPrice6 =data[1083].price;
            let lastPrice7 =data[1286].price;
            let lastPrice8 =data[558].price;
            let lastPrice9 =data[431].price;
            let lastPrice10 =data[842].price;

            //Pusheamos precios al Array de Precios

            pricesArray.push(lastPrice1);
            pricesArray.push(lastPrice2);
            pricesArray.push(lastPrice3);
            pricesArray.push(lastPrice4);
            pricesArray.push(lastPrice5);
            pricesArray.push(lastPrice6);
            pricesArray.push(lastPrice7);
            pricesArray.push(lastPrice8);
            pricesArray.push(lastPrice9);
            pricesArray.push(lastPrice10);

            //Cambiamos precios en el Array de Objetos CRYPTO

            cryptos[0].price =data[11].price;
            cryptos[1].price =data[12].price;
            cryptos[2].price =data[296].price;
            cryptos[3].price =data[779].price;
            cryptos[4].price =data[1419].price;
            cryptos[5].price =data[1083].price;
            cryptos[6].price =data[1286].price;
            cryptos[7].price =data[558].price;
            cryptos[8].price =data[431].price;
            cryptos[9].price =data[842].price;

        setInterval(function(){

            pricesArray.push(lastPrice1);
            pricesArray.push(lastPrice2);
            pricesArray.push(lastPrice3);
            pricesArray.push(lastPrice4);
            pricesArray.push(lastPrice5);
            pricesArray.push(lastPrice6);
            pricesArray.push(lastPrice7);
            pricesArray.push(lastPrice8);
            pricesArray.push(lastPrice9);
            pricesArray.push(lastPrice10);

        }, 1000* 30);

        //BTC
        $(".marketPrice0").append(`
        
        <h4>${data[11].price}</h4>
        
        `);
        //ETH
        $(".marketPrice1").append(`
        
        <h4>${data[12].price}</h4>
        
        `);
        //ADA
        $(".marketPrice2").append(`
        
        <h4>${data[296].price}</h4>
        
        `);
        //SOL
        $(".marketPrice3").append(`
        <h4>${data[779].price}</h4>
        
        `);
        //SHIBA
        $(".marketPrice4").append(`
        
        <h4>${data[1419].price}</h4>
        
        `);
        //ALPHA
        $(".marketPrice5").append(`
        
        <h4>${data[1083].price}</h4>
        
        `);
        //CAKE
        $(".marketPrice6").append(`
        
        <h4>${data[1286].price}</h4>
        
        `);
        //DOGE
        $(".marketPrice7").append(`
        
        <h4>${data[558].price}</h4>
        
        `);
        //LINK
        $(".marketPrice8").append(`
        
        <h4>${data[431].price}</h4> 
        
        `);
        //ZEN
        $(".marketPrice9").append(`
        
        <h4>${data[842].price}</h4>
        
        `);

        for (let index = 0; index < cryptos.length; index++) {    //Escribimos en la WALLET
    
            let x = parseFloat(pricesArray[index]);

            if(localStorage.getItem("Currency")== null){    //Si aun no se ingreso dinero, por ende no hay divisa:

                localStorage.setItem("Currency", " ")

            }

            $("#tableBody").append(`
                <tr> 
                    <td>${cryptos[index].name}</td>
                    <td>${localStorage.getItem(cryptos[index].name) * 1}</td> <!--Multiplico por 1 para que diga 0-->
                    <td>${localStorage.getItem("Currency")} ${localStorage.getItem(cryptos[index].name) * x}</td> <!--Multiplico por 1 para que diga la cotizacion->
                </tr>
            `);
            
        }
    }
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cargo las crypto al HTML
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    $("#cryptoGrid").append(`

            <div class="cryptoDesc${[index]}">
            <img src="Images/CryptoLogos/${cryptos[index].name}.png" alt="Crypto 1" width="200px" height="200px">
            <h3 id="${cryptos[index].name}">${cryptos[index].name}</h3>
            <h4 class="marketPrice${index}"></h4>
            <button id="sellButton${index}" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#sell${cryptos[index].id}Modal">VENDER</button>
            <button id="buyButton${index}" class="btn btn-success"data-bs-toggle="modal" data-bs-target="#buy${cryptos[index].id}Modal">COMPRAR</button>

            <!--SELL MODAL-->

            <div class="modal fade" id="sell${cryptos[index].id}Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Vender ${cryptos[index].name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">${cryptos[index].acronym}</span>
                        <input type="text" class="form-control sellQuantity" id= "sellQuantity${[index]}"> <!--sellQuantity tendra la cantidad que quiere vender-->
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">${localStorage.getItem("Currency",selectedPair)}</span>
                        <input type="text" class="form-control sellQuantityPrice" id= "sellQuantityPrice${[index]}"> <!--sellQuantityPrice tendra el valor de lo que quiere vender-->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"id="closeModalSell${[index]}">Cerrar</button>
                    <button type="submit" class="btn btn-danger"id="sellConfirm${[index]}">Vender</button>
                </div>
                </div>
            </div>
            </div>

            <!--BUY MODAL-->

            <div class="modal fade" id="buy${cryptos[index].id}Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Comprar ${cryptos[index].name}:</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">${cryptos[index].acronym}</span>
                    <input type="text" class="form-control buyQuantity" id= "buyQuantity${[index]}"> <!--buyQuantity tendra la cantidad que quiere comprar-->
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">${localStorage.getItem("Currency",selectedPair)}</span>
                        <input type="text" class="form-control buyQuantityPrice" id= "buyQuantityPrice${[index]}"> <!--buyQuantityPrice tendra el valor de lo que quiere comprar-->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModalBuy${[index]}">Cerrar</button>
                    <button type="submit" class="btn btn-success" id="buyConfirm${[index]}">Comprar</button>
                </div>
                </div>
            </div>
            </div>
            </div>
    `);
    
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cargo las crypto y los pares al los select del FORM
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    $("#select1").append(`
        <option value="${index+1}">${cryptos[index].name}</option>
    `);

}
for (let index = 0; index < pairs.length; index++) {

    $("#select2").append(`
        <option value="${index+1}">${pairs[index].acronym}</option>
    `);

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Botones de Venta y Compra para ultimas actualizaciones
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    $(function(){

        $("#sellButton"+index).on('click',function(){  //Boton VENTA
            let aux = $(this).parent().children();
            console.log("Vender "+aux[1].id);
        })
    });
    
    $(function(){
    
        $("#buyButton"+index).on('click',function(){  //Boton COMPRA
            let aux = $(this).parent().children();
            console.log("Comprar "+aux[1].id);
        })
    });

}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Modal de Ingreso de Dinero
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < pairs.length; index++) {

    $(".inputMoneyAcr").append(`
        <option value="${pairs[index].acronym}">${pairs[index].acronym}</option>
    `);

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Boton de Ingresar Dinero
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$("#depositMoneyOk").on('click',function(){    //Boton Aceptar en el modal de Ingreso de Dinero

    inputMon = $("#inputMoneyQuantity").val();
    selectedPair = $("#inputMoneyPair").val();
    if((localStorage.getItem("Money"))==null){  //Guardamos el dinero ingresado en el storage
        localStorage.setItem("Money",parseFloat(inputMon));
    }
    else{   //Si ya habia dinero, lo sumamos
        localStorage.setItem("Money",parseFloat(inputMon) + parseFloat(localStorage.getItem("Money")));
    }

    localStorage.setItem("Currency",selectedPair);
    location.reload(true); //Refrescamos la pagina para que se cambie el par

})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Dinero Ingresado
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

if(localStorage.getItem("Money",inputMon)===null){ // Si no hay dinero no mostramos la lectura del LocalStorage

    let x= document.getElementById("realMoneyQuantity");
    x.style.display = "none";
}

$("#realMoneyQuantity").append(`

        <h5 class="m-4">${localStorage.getItem("Currency",selectedPair)}${localStorage.getItem("Money",inputMon)}</h5> <!--Dinero ya ingresado-->

`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Animo el borde de las Cripto dependiendo si estan en baja o en alza.
//Tambien comparamos y cambiamos valores de STATE. (Alza o baja)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    if (cryptos[index].state==1) { //Alza

        $(".cryptoDesc"+index).css({

                "margin": "30px",
                "padding": "10px",
                "text-align": "center",
                "border-color": "grey",
                "border-radius": "10%",
                "border-style": "inset",
                "border-color":"green",
        });
        $(".marketPrice"+index).css({

                "color":"green",
        });
    }
    if (cryptos[index].state==2) { //Alza

        $(".cryptoDesc"+index).css({

            "margin": "30px",
            "padding": "10px",
            "text-align": "center",
            "border-color": "grey",
            "border-radius": "10%",
            "border-style": "inset",
            "border-color":"red",
        });
        $(".marketPrice"+index).css({

            "color":"red",
            
        });
    }

}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//
// Logica de transacciones: sellQuantity, sellQuantityPrice, buyQuantity, buyQuantityPrice, sellConfirm, buyConfirm, 
//                         addToWallet, getFromWallet 
//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


for (let index = 0; index < cryptos.length; index++) { //Si se pone el valor de cuanta CRYPTO quiere vender

    $("#sellQuantity"+index).on('change',function(){   

        let x = document.getElementById("sellQuantity"+index).value ; //Tomamos el valor que quiere comprar
        document.getElementById("sellQuantityPrice"+index).value = x* pricesArray[index]; //Escribimos el valor de lo que saldra debajo
        moneyValue=document.getElementById("sellQuantityPrice"+index).value; //Guardamos el precio de la crypto
        cryptoValue=x; //Guardamos monto de dinero
        console.log("MONEY " + moneyValue);
        console.log("CRYPTO " + cryptoValue);
    })

}

for (let index = 0; index < cryptos.length; index++) { //Si se pone el valor de cuanta divisa quiere gastar en la crypto

    $("#sellQuantityPrice"+index).on('change',function(){   

        let x = document.getElementById("sellQuantityPrice"+index).value ; //Tomamos el valor de cuanto dinero quiere gastar
        document.getElementById("sellQuantity"+index).value = x/ pricesArray[index]; // Escribimos cuanta crypto le dara
        cryptoValue=document.getElementById("sellQuantity"+index).value; //Guardamos el precio de la crypto
        moneyValue=x; //Guardamos monto de dinero
        console.log("MONEY " + moneyValue);
        console.log("CRYPTO " + cryptoValue);
    })

}

for (let index = 0; index < cryptos.length; index++) { //Si se pone el valor de cuanta CRYPTO quiere comprar

    $("#buyQuantity"+index).on('change',function(){   

        let x = document.getElementById("buyQuantity"+index).value ; //Tomamos el valor de cuanta crypto quiere comprar
        document.getElementById("buyQuantityPrice"+index).value = x* pricesArray[index]; //Escribimos el valor de cuanto dinero le daran
        moneyValue=document.getElementById("buyQuantityPrice"+index).value; //Guardamos el precio de la crypto
        cryptoValue=x; //Guardamos monto de dinero
        console.log("MONEY " + moneyValue);
        console.log("CRYPTO " + cryptoValue);
    })

}

for (let index = 0; index < cryptos.length; index++) { //Si se pone el valor de cuanta divisa quiere obtener de la crypto

    $("#buyQuantityPrice"+index).on('change',function(){   

        let x = document.getElementById("buyQuantityPrice"+index).value ; //Tomamos el valor de cuanto dinero quiere recibir
        document.getElementById("buyQuantity"+index).value = x/ pricesArray[index]; //Escribimos cuanta crypto debe vender
        cryptoValue=document.getElementById("buyQuantity"+index).value; //Guardamos el precio de la crypto
        moneyValue=x; //Guardamos monto de dinero
    })
    
}

for (let index = 0; index < cryptos.length; index++) { // BOTONES VENDER Y COMPRAR DENTRO DEL MODAL DE CADA CRYPTO

    //VENTA
    $(function(){

        $("#sellConfirm"+index).on('click',function(){  //Boton VENTA

            if(parseFloat(localStorage.getItem(cryptos[index].name))<parseFloat(cryptoValue)){ //Vemos si la cantidad de crypto a vender es diferente a la que poseemos
                alert("No puedes vender! No tienes esa cantidad de "+cryptos[index].name);      //Si es menor la posesion: Mostramos la alerta.
            }
            if(parseFloat(localStorage.getItem(cryptos[index].name))>=parseFloat(cryptoValue)){ //Si es mayor o igual la posesion: Vendemos
                alert("Vendiste "+cryptoValue+cryptos[index].acronym+" a: "+moneyValue);
                let getFromWallet;
                let aux;
                let x;
                getFromWallet= parseFloat(cryptoValue);

                aux= parseFloat(localStorage.getItem(cryptos[index].name)) - getFromWallet; //Restamos lo que tenemos menos lo que queremos vender
                localStorage.setItem(cryptos[index].name,aux); //Guardamos el nuevo valor de lo que tenemos
                x= ((parseFloat(localStorage.getItem("Money",inputMon))+ parseFloat(moneyValue))); //Sumamos el dinero de la venta
                localStorage.setItem("Money",x);
                
            }

        })

    });

    //COMPRA
    $(function(){
    
        $("#buyConfirm"+index).on('click',function(){  //Boton COMPRA

            if(parseFloat(localStorage.getItem("Money",inputMon))<parseFloat(moneyValue)){
                alert("No hay dinero suficiente");
            }
            if(parseFloat(localStorage.getItem("Money",inputMon))>= parseFloat(moneyValue)){
                alert("Se realizó la compra! Dar a CERRAR.");  
                let aux;
                let addToWallet;
                aux=((parseFloat(localStorage.getItem("Money",inputMon))- parseFloat(moneyValue)));
                localStorage.setItem("Money",parseFloat(aux).toFixed(2));
                addToWallet= parseFloat(cryptoValue);

                if(!(localStorage.getItem(cryptos[index].name,addToWallet)) == 1){ 
                    //Si no existe el objeto, lo creamos.
                    //Preguntamos si hay algo negando lo que "habria" y si es igual a 1, es decir, no hay
                    //nada, entonces:

                    let x= new walletCrypto(cryptos[index].name,addToWallet,addToWallet*cryptos[index].price); 
                    //Creamos el objeto de la crypto comprada
                    localStorage.setItem(cryptos[index].name,addToWallet); //Guardamos en storage la compra
                    wallet.push(x); //Pusheamos el objeto al Array Wallet
                    console.log(wallet);
                }
                else{ //Si ya existe, sumamos la nueva compra.
                    let z= parseFloat(localStorage.getItem(cryptos[index].name,addToWallet)) + addToWallet ; //Sumamos la nueva compra al valor viejo
                    localStorage.setItem(cryptos[index].name,z); //Actualizamos el Storage con el nuevo cambio
                    wallet[index].quantity=z;      
                }
                
            };
        })
    });
    for (let index = 0; index < cryptos.length; index++) { //Funciones para refrescar la pagina con cada transaccion

        $(function(){

            $("#closeModalBuy"+[index]).on('click',function(){
                location.reload(true);})
            
        });

    }
    for (let index = 0; index < cryptos.length; index++) {

        $(function(){

            $("#closeModalSell"+[index]).on('click',function(){
                location.reload(true);})
            
        });

    }

}

