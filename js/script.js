console.log("Twinfield case by Sofia Kasimi");

function toggleNavbar(icon) {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    icon.innerHTML = '&#9747;';
  } else {
    x.className = "topnav";
    icon.innerHTML = '&#9776;';
  }
}
