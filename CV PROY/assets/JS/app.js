//MENÚ OPCIONES
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//GUARDAR MENÚ
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//BARRAS
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let diseño = document.getElementById("diseño");
crearBarra(diseño);
let maquillaje = document.getElementById("maquillaje");
crearBarra(maquillaje);
let sustentabilidad = document.getElementById("sustentabilidad");
crearBarra(sustentabilidad);
let dibujo = document.getElementById("dibujo");
crearBarra(dibujo);
let textiles = document.getElementById("textiles");
crearBarra(textiles);
let editoriales = document.getElementById("editoriales");
crearBarra(editoriales);

//ARREGLO PARA PINTAR LAS BARRAS
let contadores = [-1,-1,-1,-1,-1,-1];
//VARIABLE EJECUTAR
let entro = false;

//ANIMACIÓN
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalDiseño = setInterval(function(){
            pintarBarra(diseño, 16, 0, intervalDiseño);
        },100);
        const intervalMaquillaje = setInterval(function(){
            pintarBarra(maquillaje, 11, 1, intervalMaquillaje);
        },100);
        const intervalSustentabilidad = setInterval(function(){
            pintarBarra(sustentabilidad, 11, 2, intervalSustentabilidad);
        },100);
        const intervalDibujo = setInterval(function(){
            pintarBarra(dibujo, 15, 3, intervalDibujo);
        },100);
        const intervalTextiles = setInterval(function(){
            pintarBarra(textiles, 16, 4, intervalTextiles);
        },100);
        const intervalEditoriales = setInterval(function(){
            pintarBarra(editoriales, 11, 5, intervalEditoriales);
        },100);
    }
}

//PINTAR BARRA
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#985b32";
    }else{
        clearInterval(interval)
    }
}

// SCROLL DETECCIÓN
window.onscroll = function(){
    efectoHabilidades();
}