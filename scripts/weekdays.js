var message = [
    "Sunday - time to think about your soul",
    "first day of the week",
    "second day of the week",
    "third day of the week",
    "fourth day of the week",
    "fifth day of the week",
    "sixth day of the week"   
];

window.onload = function () {  
    var day = new Date().getDay();
    var text = "Today is a " + message[day];

    document.getElementById("dayofweek").innerHTML = text; 
}

