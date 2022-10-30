const menuItems = document.querySelectorAll(".nav-item")
const menuBtn = document.querySelector("#menu_hamburguer")

menuBtn.addEventListener("click" ,function() {
    document.body.classList.toggle( "mobile-menu-active");
});


menuItems.forEach(function(item) {

    item.addEventListener("click", function () {

        document.body.classList.remove("mobile-menu-active");
        
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    this.classList.add("active");
});

});


window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})
//------------------------------------------------------------
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
    slides();
}, intervalo);

function slides() {

    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.tranc = "transform .8s"
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.tranc = "transform .0s";
            contador = 1;
        }, 1500)
    }
}

//----------------Carrito----------------------------------------

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = ' Pagar $${total}'
}
function pay() {
    //console.log(product, price);
    window.alert(products.join (",\n") + (",\n") + "Total de su compra" + "$" + total);

}