function shakeINP() {
  event.preventDefault(event);

  document.getElementById("name1").classList.add("shakeInput");
  document.getElementById("name2").classList.add("shakeInput");

  setTimeout(() => {
    document.getElementById("name1").classList.remove("shakeInput");
    document.getElementById("name2").classList.remove("shakeInput");
}, 600);
}
//for my contact page

function submitLogs(){
  event.preventDefault(event);
  
}
