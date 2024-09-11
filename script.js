a = prompt("enter smaller value ")
b = prompt("enter greater value")
if (a < b) {
    alert("thanks for your submition")
}
else if (a > b) {
    alert("sorry but you have done a mistake please recheck")
}
else {
    alert("you are not entring correct value")
}






console.log(a, a > b ? "yes" : "no")






var Year;
var currentYear = new Date().getFullYear();
switch (currentYear) {
    case 2021:
        Year = 2021;
        break;
    case 2022:
        Year = 2022;
        break;
    case 2023:
        Year = 2023;
        break;
    case 2024:
        Year = 2024;
        break;
    case 2025:
        Year = 2025;
        break;
    case 2026:
        Year = 2026;
        break;
    case 2027:
        Year = 2027;
        break;
}
document.getElementById("current_Year").innerHTML = "Today year is " + Year;
