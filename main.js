$(document).ready(() => {

    let color = Math.floor(100000 + Math.random() * 900000)

    setInterval(function() {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        if (hr > 12) {
            hr = hr - 12;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }
        
        if (sec < 10) {
            sec = "0" + sec;
        }

        var time = hr + ":" + min + ":" + sec;

        $("#clock").html(time)

        let newColor = color += 1 
        finalColor = '#' + newColor

        Number(hr).toString(16)+Number(min).toString(16)+Number(sec).toString(16)

        $("#hex").html(finalColor)

        document.body.style.backgroundColor = finalColor; 
    },1000)
})