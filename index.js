let [ day, hour, min, sec ] = document.querySelectorAll('.timer'); 

let ctdwn = setInterval( () => {
    sec.innerText -= 1;

    if(sec.innerText < 0) {
        min.innerText -= 1; 
        sec.innerText = 59
        if (min.innerText < 0) {
            hour.innerText -= 1; 
            min.innerText = 59; 
            if (hour.innerText < 0) {
                day.innerText -= 1; 
                hour.innerText = 23; 
            }
        }
    }
}, 1000)