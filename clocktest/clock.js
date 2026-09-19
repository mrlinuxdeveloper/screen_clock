let Hour = document.querySelector(".time1")
let minutes1 = document.querySelector(".time2")
let second = document.querySelector(".time3")
var dot = document.querySelectorAll(".dot")
let timing = () =>{
    let date = new Date()
    Hour.textContent = `${date.getHours()}`<10 ? 0 +`${date.getHours()}`
    minutes1.textContent = `${date.getMinutes()}` <10 ? 0+`${date.getMinutes()}`:`${date.getMinutes()}`
    second.textContent = `${date.getSeconds()}`< 10 ? 0+` ${date.getSeconds()}`:`${date.getSeconds()}`
    }
    let doting =()=>{
       dot.forEach(child => child.classList.toggle("hidden")) 
    }
    setInterval(timing,1000)
    setInterval(doting,500)
    
    


