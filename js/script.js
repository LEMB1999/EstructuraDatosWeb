const btnElementPush = document.getElementById("btnPush");
const btnElementPop = document.getElementById("btnPop");
const btnElementTop = document.getElementById("btnTop");
const entrada = document.getElementById("input");
const Cuadro = document.getElementsByClassName("Pila")[0];
const label = document.getElementById("lbPop");
const labelTop = document.getElementById("lbTope")
var   tope ;
var   length = 0
btnPush.addEventListener("click",() =>{
    console.log(entrada.value);
    if(!entrada.value){
        document.getElementById("error").style.visibility = "visible";
        entrada.focus();
    }else{
        document.getElementById("error").style.visibility = "hidden";
        if(length===0){
            let node =  document.createElement("div");
            let input =  entrada.value
            let text =  document.createTextNode(input);  
            node.appendChild(text);
            node.setAttribute("class","estiloCuadro")
            Cuadro.appendChild(node)
            length++;
            entrada.value= "";
            entrada.focus();
        }else{
            let node =  document.createElement("div");
            let input =  entrada.value
            let text =  document.createTextNode(input);  
            node.appendChild(text);
            tope =  Cuadro.firstElementChild;
            Cuadro.insertBefore(node,tope);
            node.setAttribute("class","estiloCuadro")
            length++;
            //limpiar input y hacer focus al input
            entrada.value= "";
            entrada.focus();
        }
    }
    
});

btnElementPop.addEventListener("click",()=>{
    if(length==0){
        alert("La pila esta vacia")
    }else{
        length--;
        tope =  Cuadro.firstElementChild;
        let valor = tope.textContent;
        label.textContent = "Valor Sacado:"+valor;
        Cuadro.removeChild(tope);        
    }
})


btnElementTop.addEventListener("click",()=>{
    if(length==0){
        alert("Pila Vacia");
    }else{
        tope = Cuadro.firstElementChild.textContent;
        labelTop.textContent = "Valor del Tope:"+tope; 
    }
})




