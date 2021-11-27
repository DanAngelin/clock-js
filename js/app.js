setInterval(clockJs, 1000)

function clockJs() {
    const clock = new Date();

    let date = clock.getDate();

    let day = clock.getDay();
    let daysArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    day = daysArray[day];

    let month = clock.getMonth();
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = monthsArray[month];
    
    let year = clock.getFullYear();

    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    document.querySelector('#date').innerText = `${day} ${date} ${month} ${year}` ;
    document.querySelector('#time').innerText = `${hour} : ${minute} : ${second}` ;
}