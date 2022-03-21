let hours
let  minuts
let seconds

hours = +prompt('введи часы')

if  (hours !== NaN && hours >= 0 && hours < 24) {
    
    minuts = +prompt('введи минуты')
    if (minuts !== NaN && minuts >= 0 && minuts < 60) {
       
        seconds = +prompt('введи секунды')
        if (seconds !== NaN && seconds >= 0 && seconds < 60) {
           
            alert ('все норм')

        } else { alert ('секунды не норм')}

    } else { alert ('минуты не норм')} 

} else { alert ('часы не норм')} 
