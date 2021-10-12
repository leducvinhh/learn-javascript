function countdown (seconds) {
    let newSecond = seconds;

    let countdownId = setInterval(() => {
        console.log(newSecond);

        if(newSecond === 0) clearInterval(countdownId);
        
        newSecond--;
    }, 1000)
}
countdown(10);