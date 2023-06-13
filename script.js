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
    // document.write(`CPU:${cpu} <br> User:${user}<br>The Winner is: ${result}`)
    document.getElementById("day").innerHTML = `${da} : ${mn} : ${yr} , ${vardays[dy]}`
    // document.getElementById("month").innerHTML = mn
    // document.getElementById("yr").innerHTML = yr
    document.getElementById("hour").innerHTML = `${h} : ${m} : ${s}`
    // document.getElementById("semi1").innerHTML =":"
    // document.getElementById("minute").innerHTML = m
    // document.getElementById("semi2").innerHTML =":"
    // document.getElementById("second").innerHTML = s
    // document.write(`<br>`)
    
  }, 850);
}
clocksite();
