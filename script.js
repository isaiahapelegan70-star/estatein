var getGuestName = function() {
    let name = prompt("Please enter your name");
    document.writeln('Welcome'   +name);
};

getGuestName();

handleClick = function() {
    let currentCount = document.getElementById("clickCount").textContent;
    document.getElementById("clickCount").textContent = parseInt(currentCount) + 1;
}