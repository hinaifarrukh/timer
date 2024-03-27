const edate= "30 March 2024 03:26:34 AM";
document.querySelector("#edate").innerText=edate;
const inputs=document.querySelectorAll("input");

function countdownclock()
{
    const end= new Date(edate)
    const cur= new Date();
    let diff=(end-cur)/1000;// 1 sec= 1000;
    
if(diff<0) return;
    // convert into days
    inputs[0].value=(Math.floor(diff/3600/24));
    //convert into hours
    inputs[1].value=(Math.floor(diff/3600)%24);
    // minutes
    inputs[2].value=(Math.floor(diff/60) % 60);
    // sec
    inputs[3].value=(Math.floor(diff % 60));
}
//setInterval(function,1000 milisec)
setInterval(
    ()=>{
        countdownclock()
    },1000)


