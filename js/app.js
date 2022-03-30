
function clockJs() {
    const clock = new Date();

    let date = `${clock.getDate()}`.padStart(2, 0); // Date Now
    let dateUTC = `${clock.getUTCDate()}`.padStart(2, 0); // Date UTC

    let day = clock.getDay(); // Day Now
    let dayUTC = clock.getUTCDay(); // Day UTC
    let daysArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    day = daysArray[day];
    dayUTC = daysArray[dayUTC];

    let month = clock.getMonth(); // Month Now
    let monthUTC = clock.getUTCMonth();  // Month UTC
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = monthsArray[month];
    monthUTC = monthsArray[monthUTC]
    
    let year = clock.getFullYear(); // Year Now
    let yearUTC = clock.getUTCFullYear(); // Year UTC

    //  hour, minutes, seconds now
    const hour = `${clock.getHours()}`.padStart(2, 0);
    const minute = `${clock.getMinutes()}`.padStart(2, 0);
    const second = `${clock.getSeconds()}`.padStart(2, 0);

    // hour, minutes, seconds UTC
    let hourUTC = `${clock.getUTCHours()}`.padStart(2, 0);
    let minuteUTC = `${clock.getUTCMinutes()}`.padStart(2, 0);
    let secondUTC = `${clock.getUTCSeconds()}`.padStart(2, 0);

    document.querySelector('#date').textContent = `${day} ${date} ${month} ${year}` ;
    document.querySelector('#time').textContent = `${hour} : ${minute} : ${second}` ;
    document.querySelector('#dateutc').textContent = `${dayUTC} ${dateUTC} ${monthUTC} ${yearUTC}` ;
    document.querySelector('#timeutc').textContent = `${hourUTC} : ${minuteUTC} : ${secondUTC} UTC` ;
    document.querySelector('.year').textContent = ` ${year} `;
}

setInterval(clockJs, 1000);

function clockTimezone() {
    const timezone = new Date();


    // method for let utc find from stackoverflow
    let utc = timezone.getTime() + (timezone.getTimezoneOffset() * 60000);
    let newYork = new Date(utc + (3600000 * -4));
    let tokyo = new Date( utc + (3600000 * 9));

    let dateNewYork = `${newYork.getDate()}`.padStart(2, 0); //Date NewYork
    let dateTokyo = `${tokyo.getDate()}`.padStart(2, 0); // Date Tokyo

    let dayNewYork = newYork.getDay();  // Day NewYork
    let dayTokyo = tokyo.getDay(); // Day Tokyo
    let daysArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    dayNewYork = daysArray[dayNewYork];
    dayTokyo = daysArray[dayTokyo];

    let monthNewYork = newYork.getMonth(); // Month NewYork
    let monthTokyo = tokyo.getMonth(); // Month Tokyo
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    monthNewYork = monthsArray[monthNewYork];
    monthTokyo = monthsArray[monthTokyo];

    let yearNewYork = newYork.getFullYear(); // Year NewYor;
    let yearTokyo = tokyo.getFullYear(); // Year Tokyo

    let hourNewYork = `${newYork.getHours()}`.padStart(2, 0); //Hour NewYork
    let hourTokyo = `${tokyo.getHours()}`.padStart(2, 0);  // Hour Tokyo
    let minuteNewYork = `${newYork.getMinutes()}`.padStart(2, 0); // Minutes NewYork
    let minuteTokyo = `${tokyo.getMinutes()}`.padStart(2, 0); // Minutes Tokyo
    let secondNewYork = `${newYork.getSeconds()}`.padStart(2, 0); // Seconds NewYork
    let secondTokyo = `${tokyo.getSeconds()}`.padStart(2, 0); // Seconds Tokyo



    document.querySelector('#datenewyork').textContent = `${dayNewYork} ${dateNewYork} ${monthNewYork} ${yearNewYork}`
    document.querySelector('#timenewyork').textContent = `${hourNewYork} : ${minuteNewYork} : ${secondNewYork} New York`
    document.querySelector('#datetokyo').textContent = `${dayTokyo} ${dateTokyo} ${monthTokyo} ${yearTokyo}`;
    document.querySelector('#timetokyo').textContent = `${hourTokyo} : ${minuteTokyo} : ${secondTokyo} Tokyo`;
};

setInterval(clockTimezone, 1000);