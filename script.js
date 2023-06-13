let h
let m
let s
let da
let dy
let mn
let yr
let vardays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let clocksite=()=>{
  setInterval(() => {
    d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    da=d.getDate()
    dy=d.getDay()
    mn=d.getMonth()
    yr=d.getFullYear()
 
    document.getElementById("day").innerHTML = `${da} : ${mn} : ${yr} , ${vardays[dy]}`
    document.getElementById("hour").innerHTML = `${h} : ${m} : ${s}`
 
  }, 850);
}
clocksite();
