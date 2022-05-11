function changeMode() {
  document.body.classList.toggle('dark');
  if (document.querySelector(".switch").innerHTML === "Night mode") {
    document.querySelector(".switch").innerHTML = "Light mode";
  } else {
    document.querySelector(".switch").innerHTML = "Night mode";
  }
}