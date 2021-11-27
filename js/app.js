setInterval(clockJs, 1000)

function clockJs() {
    const clock = new Date();

    let date = clock.getDate();
    let dateUTC = clock.getUTCDate();

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

    let hourUTC = clock.getUTCHours();
    let minuteUTC = clock.getUTCMinutes();
    let secondUTC = clock.getUTCSeconds();

    document.querySelector('#date').innerText = `${day} ${date} ${month} ${year}` ;
    document.querySelector('#time').innerText = `${hour} : ${minute} : ${second}` ;
    document.querySelector('#dateutc').innerText = `${dayUTC} ${dateUTC} ${monthUTC} ${yearUTC}` ;
    document.querySelector('#timeutc').innerText = `${hourUTC} : ${minuteUTC} : ${secondUTC} UTC` ;
}