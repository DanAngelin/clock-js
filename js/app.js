setInterval(clockJs, 1000)

function clockJs() {
    const clock = new Date();

    let date = clock.getDate();
    let dateUTC = clock.getUTCDate();
    date = (date < 10 ? "0" : "") + date;
    dateUTC = (dateUTC < 10 ? "0" : "") + dateUTC;

    let day = clock.getDay();
    let dayUTC = clock.getUTCDay();
    let daysArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    day = daysArray[day];
    dayUTC = daysArray[dayUTC];

    let month = clock.getMonth();
    let monthUTC = clock.getUTCMonth();
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = monthsArray[month];
    monthUTC = monthsArray[monthUTC]
    
    let year = clock.getFullYear();
    let yearUTC = clock.getUTCFullYear();

    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    hour = (hour < 10 ? "0" : "") + hour;
    minute = (minute < 10 ? "0" : "") + minute;
    second = (second < 10 ? "0" : "") + second;

    let hourUTC = clock.getUTCHours();
    let minuteUTC = clock.getUTCMinutes();
    let secondUTC = clock.getUTCSeconds();
    hourUTC = (hourUTC < 10 ? "0" : "") + hourUTC;
    minuteUTC = (minuteUTC < 10 ? "0" : "") + minuteUTC;
    secondUTC = (secondUTC < 10 ? "0" : "") + secondUTC;

    document.querySelector('#date').innerText = `${day} ${date} ${month} ${year}` ;
    document.querySelector('#time').innerText = `${hour} : ${minute} : ${second}` ;
    document.querySelector('#dateutc').innerText = `${dayUTC} ${dateUTC} ${monthUTC} ${yearUTC}` ;
    document.querySelector('#timeutc').innerText = `${hourUTC} : ${minuteUTC} : ${secondUTC} UTC` ;
}

setInterval(clockTimezone, 1000)

function clockTimezone() {
    const timezone = new Date();


    // method for let utc find from stackoverflow
    let utc = timezone.getTime() + (timezone.getTimezoneOffset() * 60000);
    let newYork = new Date(utc + (3600000 * -5));
    let tokyo = new Date( utc + (3600000 * 9));

    let dateNewYork = newYork.getDate()
    let dateTokyo = tokyo.getDate();
    dateNewYork = (dateNewYork < 10 ? "0" : "") + dateNewYork;
    dateTokyo = (dateTokyo < 10 ? "0" : "") + dateTokyo;

    let dayNewYork = newYork.getDay();
    let dayTokyo = tokyo.getDay();
    let daysArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    dayNewYork = daysArray[dayNewYork];
    dayTokyo = daysArray[dayTokyo];

    let monthNewYork = newYork.getMonth();
    let monthTokyo = tokyo.getMonth();
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    monthNewYork = monthsArray[monthNewYork];
    monthTokyo = monthsArray[monthTokyo];

    let yearNewYork = newYork.getFullYear();
    let yearTokyo = tokyo.getFullYear();

    let hourNewYork = newYork.getHours();
    let hourTokyo = tokyo.getHours();
    let minuteNewYork = newYork.getMinutes();
    let minuteTokyo = tokyo.getMinutes();
    let secondNewYork = newYork.getSeconds();
    let secondTokyo = tokyo.getSeconds();

    hourNewYork = (hourNewYork < 10 ? "0" : "") + hourNewYork;
    minuteNewYork = (minuteNewYork < 10 ? "0" : "") + minuteNewYork;
    secondNewYork = (secondNewYork < 10 ? "0" : "") + secondNewYork;
    hourTokyo = (hourTokyo < 10 ? "0" : "") + hourTokyo;
    minuteTokyo = (minuteTokyo < 10 ? "0" : "") + minuteTokyo;
    secondTokyo = (secondTokyo < 10 ? "0" : "") + secondTokyo;



    document.querySelector('#datenewyork').innerText = `${dayNewYork} ${dateNewYork} ${monthNewYork} ${yearNewYork}`
    document.querySelector('#timenewyork').innerText = `${hourNewYork} : ${minuteNewYork} : ${secondNewYork} New York`
    document.querySelector('#datetokyo').innerText = `${dayTokyo} ${dateTokyo} ${monthTokyo} ${yearTokyo}`;
    document.querySelector('#timetokyo').innerText = `${hourTokyo} : ${minuteTokyo} : ${secondTokyo} Tokyo`;
}
