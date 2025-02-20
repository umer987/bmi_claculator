//let age = document.querySelector("#aag")
let height = document.querySelector("#heig")
let weight = document.querySelector("#weig")
let calculate = document.querySelector("#butt")
let aft = document.querySelector("#after")


calculate.addEventListener("click" , function bmi() {
    


if ( age.value==""&& height.value=="" && weight.value=="") {
    alert("PLEASE ENTER VALUES")
}
else{

    let heii = parseFloat(height.value)
    let weii = parseFloat(weight.value)
    let multi = heii*heii
    let bmii
    
        bmii=weii/multi
        let fbm =parseFloat(bmii)
        age.value=""
        height.value=""
        weight.value=""
        let newelemn= document.createElement("h4")
        newelemn.innerHTML=`YOUR BMI IS ${fbm}`
        aft.appendChild(newelemn)
    
}


} )



