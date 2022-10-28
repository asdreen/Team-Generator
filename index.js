//............Add name function...........//
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
//........Plus and Minus button..............//
const minusButton = document.getElementById("first3");
const plusButton = document.getElementById("first2");
const inputField = document.getElementById("first");

minusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

//..........add box...........//
let row = $("#row-container .row:eq(0)").clone();
$("#first2").data("row", row);
$("#first2").click(function () {
  $("#row-container").append($(this).data("row").clone());
});
$("#first3").click(function () {
  $("#row-container .row")
    .eq($("#row-container .row").length - 2)
    .remove();
});
