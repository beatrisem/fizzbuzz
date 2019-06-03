// 100 div elements 

for (var i = 1; i <= 100; i++ ) {
    var div = document.createElement("div");
    div.innerHTML = "myId" + i;
    div.id = "myId" + i;
    document.getElementById("main").appendChild(div);
}

// divides evenly with 3 and 5 (15,30, etc)
for (var i = 1; i <= 100; i++ ) {
    if (i % 3 == 0 && i % 5 == 0) {
        var div = document.getElementById("myId" + i);
        div.className = "three_and_five";
        div.innerText = "FizzBuzz";
    }
}

// divides evenly with 3 ONLY (3,6,9)

for (var i = 1; i <= 100; i++ ) {
    if (i % 3 == 0 && i %5 != 0) {
        var div = document.getElementById("myId" + i);
        div.className = "three";
        div.innerText = "Fizz";
    }
}


// divides evenly with 5 ONLY (5,10)

for (var i = 1; i <= 100; i++ ) {
    if (i % 3 != 0 && i % 5 == 0) {
        var div = document.getElementById("myId" + i);
        div.className = "five";
        div.innerText = "Buzz";
    }
}

// does not divide with 3 nor 5 (for example 4,7 etc) 
for (var i = 1; i <= 100; i++ ) {
    if (i % 3 != 0 && i % 5 != 0) {
        var div = document.getElementById("myId" + i);
        div.className = "other";
        div.innerText = "number " + i;
    }
}