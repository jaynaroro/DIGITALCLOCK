const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')


//function to get time from computer
function getClock(){
    let hr = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    if(hr <= 12 )
    {
        ampm = 'AM'
    }else{
        hr = hr - 12
        ampm = 'PM'
    }

    //short form of if statement
    hr = hr < 10 ? '0' + hr : hr;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

hourEl.innerText = hr
minutesEl.innerText = m
secondsEl.innerText = s
ampmEl.innerText = ampm 
setTimeout(()=>{
getClock()
}, 1000)
}

//call and refresh after every seconds
getClock()

