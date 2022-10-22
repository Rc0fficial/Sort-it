let dragindex=0;
let dropindex=0;
let clone="";

function drag(e)
{
e.dataTransfer.setData("text",e.target.id);
}

function drop(e)
{
e.preventDefault();
clone=e.target.cloneNode(true);
let data=e.dataTransfer.getData("text"); 
if(clone.id !== data) {
let nodelist=document.getElementById("parent").childNodes;
for(let i=0;i<nodelist.length;i++)
{
if(nodelist[i].id==data)
{
dragindex=i;
}

}

document.getElementById("parent").replaceChild(document.getElementById(data),e.target);

document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
  }

let nl=[...document.getElementById("parent").children];
let arr = nl.map(n=>n.textContent);
if(sortedOrder.sort().join(',') == arr.join(',')){
  // alert('You Won!!!')
  if(confirm('You Won!!!')){
    window.location.reload();  
}
}
}

function allowDrop(e)
{
    e.preventDefault();
}

// document.getElementById('box1').innerHTML=[1]
// document.getElementById('box2').innerHTML=[2]
// document.getElementById('box3').innerHTML=[3]
// document.getElementById('box4').innerHTML=[4]
// document.getElementById('box5').innerHTML=[5]
// document.getElementById('box6').innerHTML=[6] 
// document.getElementById('box7').innerHTML=[7] 
// document.getElementById('box8').innerHTML=[8] 
// document.getElementById('box9').innerHTML=[9] 


const sortedOrder = ['1','2','3','4','5','6','7','8','9'];
// const check = sortedOrder
// const checkOrder = document.getElementsByClassName('common').innerHTML.forea ;
// // 
// console.log(check)
// console.log(checkOrder)
// if(checkOrder===check){
//     alert('Game over!')
// }

var ul = document.getElementById('parent');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random()*i|0]);
}

// const sCheck = checkOrder.forEach().sort()
// console.log(sCheck)

// const obj = {para :`<div id="box1" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">1</div>
// <div id="box2" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">2</div>
// <div id="box3" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">3</div>
// <div id="box4" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">4</div>
// <div id="box5" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">5</div>
// <div id="box6" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">6</div>
// <div id="box7" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">7</div>
// <div id="box8" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">8</div>
// <div id="box9" class="common" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">9</div>
// `}

// document.getElementById('parent').innerHTML = obj.para


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer == -2) {
          // alert('Times up!!');
          if(confirm('Times up!')){
            window.location.reload();  
        }
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};
