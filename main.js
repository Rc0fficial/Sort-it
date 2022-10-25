let dragindex = 0;
let dropindex = 0;
let clone = "";

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  if (clone.id !== data) {
    let nodelist = document.getElementById("parent").childNodes;
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i].id == data) {
        dragindex = i;
      }
    }

    document
      .getElementById("parent")
      .replaceChild(document.getElementById(data), e.target);

    document
      .getElementById("parent")
      .insertBefore(
        clone,
        document.getElementById("parent").childNodes[dragindex]
      );
  }

  let nl = [...document.getElementById("parent").children];
  let arr = nl.map((n) => n.textContent);
  if (sortedOrder.sort().join(",") == arr.join(",")) {
    if (confirm("You Won!!!")) {
      window.location.reload();
    }
  }
}

function allowDrop(e) {
  e.preventDefault();
}

const sortedOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var ul = document.getElementById("parent");
for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[(Math.random() * i) | 0]);
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer == -2) {
      if (confirm("Times up!")) {
        window.location.reload();
      }
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};
