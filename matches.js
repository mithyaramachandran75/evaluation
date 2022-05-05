// write js code here corresponding to matches.html
var Matches=JSON.parse(localStorage.getItem("Matches")) || [];
display(Matches)
var favourites=JSON.parse(localStorage.getItem("favourites")) || [];
function display(data){
    data.forEach(function(element){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=element.Number;
        var td2=document.createElement("td")
        td2.innerText=element.A;
        var td3=document.createElement("td")
        td3.innerText=element.B;
        var td4=document.createElement("td")
        td4.innerText=element.Date;
        var td5=document.createElement("td")
        td5.innerText=element.Venue;
        var td6=document.createElement("td")
        td6.innerText=element.Favourite;

        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            Favourite(element)
        })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)
    })
}
function Favourite(element){
    console.log(element)
    Favourite.push(element)
    localStorage.setItem("favourites",JSON.stringify(favourite))
}
