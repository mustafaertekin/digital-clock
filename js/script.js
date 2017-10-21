let second = 0;
let minute = 0;
let hour = 0;
setInterval(timeSeter, 1000);

function timeSeter() {
    second += 1;

    if ((second % 60) == 0) {
        minute = minute + 1;
        second = 0;
        if ((minute % 60) == 0) {
            hour = hour + 1;
            minute = 0;
            if ((hour % 24) == 0) {
                hour = 0;
            }
        }
    }

    $(".point").toggle();
    
    let strSecond = new String(second).padStart(2, "0"); 
    let strMinute = new String(minute).padStart(2, "0"); 
    let strHour = new String(hour).padStart(2, "0"); 

    $("#divSecond").text(strSecond);
    $("#divMinute").text(strMinute);
    $("#divHour").text(strHour);
}
