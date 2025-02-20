//calculation for height (feet to inches)

let ini =document.querySelector("#inch")
let cal =document.querySelector("#buttii")
let afhj = document.querySelector("#after1")

cal.addEventListener("click" ,function(){

    if (ini.value == "") {
        alert("PLEASE ENTER VALUES")
    } else {
        
    let fulfll =parseFloat(ini.value)*0.3048
    let result = document.createElement("h4")
    result.innerHTML=`YOUR HEIGHT IN  METERS <br> ${fulfll}`
    afhj.appendChild(result)
    ini.value=""
    }


})
