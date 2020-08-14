var openGnb = document.querySelector(".open_gnb")
var elHeader = document.querySelector("#header")
var elOutlayer = document.querySelector(".outlayer")

function openNav(){
    elHeader.classList.toggle("on")
    elOutlayer.classList.toggle("on")
}
openGnb.addEventListener("click", openNav)
elOutlayer.addEventListener("click", openNav)

function winResize(){
    // console.log(this.innerWidth, this.innerHeight)
    var winWidth = this.innerWidth
    if(winWidth > 800){
        elHeader.classList.remove("on")
        elOutlayer.classList.remove("on")
    }
}
window.addEventListener("resize",winResize)




