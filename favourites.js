// write js code here corresponding to favourites.html
var favourite=JSON.parse(localStorage.getItem("favourite")) || []
display(favourite)
function display(data){
    data.forEach(function(element,index){
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
        td6.innerText=element.DELETE;
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deleteItem(element,index)
        })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)
    })
}
function deleteItem(element,index){
   
    Favourite.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favourite))
    window.location.reload();
}