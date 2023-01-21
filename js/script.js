function Menu() {
    var x = document.getElementById("menuhamber");
    var y = document.getElementById("icon");
    if (x.className === "menu") {
        x.className += " humbarger";
        y.className = "fa-solid fa-xmark icon";
    } else {
        x.className = "menu";
        y.className = "fas fa-bars icon";
    }
}
// paralex page
// var x=document.querySelector(".header-parent figure img");
// var z=document.getElementById("img-tech");
// document.addEventListener("scroll",paral);
// function paral(event){
//     var scol=window.pageYOffset;
//     console.log(scol);
//     var scal=scol/1100;
// if(scol>=1100 && scol<=1500){
//     z.style.transform=`scale(${scal+0.8})`
// }else{
//     z.style.transform=`scale(${1})`
// }

// }