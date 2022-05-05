// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunct)
var schedule=JSON.parse(localStorage.getItem("schedule")) || [];

function myfunct(){
    Event.preventDefault()
    data={
        matchNum:Form.matchNum.value,
         type:form.type.value,       
    }
    schedule.push(data)
    localStorage.setItem("schedule",JSON.stringify(schedule))
    window.location.href="./matches.html"
}
