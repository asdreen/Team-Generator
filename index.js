// 1. HTML References
const inputName = document.querySelector("#addName");
const unOrderedList = document.querySelector("#myUL");
const listAlert = document.querySelector(".alert");
const anotherNumber = document.querySelector("#numberAdd");
const teamsRow = document.querySelector("#teams-row");

// 2. Adding names to the list
function addPerson(event) {
  if (inputName.value !== "") {
    const li = document.createElement("li"); // creates new list items to be inserted in the empty list

    li.innerText = inputName.value; // uses the value of the input as the text of the li that just got created
    inputName.value = "";

    const backBtn = document.createElement("button");
    backBtn.classList.add("firstButton", "btn-back");
    backBtn.innerText = "⬅";

    backBtn.addEventListener("click", function (event) {
      unOrderedList.appendChild(event.target.parentNode);
    });

    li.appendChild(backBtn);

    unOrderedList.appendChild(li);
    if (unOrderedList.children.length > 0) {
      listAlert.classList.add("hidden");
      unOrderedList.classList.remove("hidden");
    }
  } else {
    alert("Please add a Name for your participants");
  }
}

// 3. creates the two initial teams
function createTeams() {
  for (let i = 0; i < anotherNumber.innerHTML; i++) {}
}
window.onload = function () {
  createTeams(); // generates teams
};
let teamsCount = 0;

// 4. new teams when you clicked +
function addTeam() {
  teamsCount = parseInt(anotherNumber.innerHTML) + 1;
  anotherNumber.innerHTML = teamsCount;
  teamsRow.innerHTML += `
             <div class="secondElement team">
                 <h4>Team ${teamsCount}</h4>
                 <ul class="list printList">
                 </ul>
             </div>
         `;
}

// 5. this function is attached to the "-" button click event
function removeTeam() {
  teamsCount = parseInt(anotherNumber.innerHTML) - 1; // take back pags by clicking "-"

  if (teamsCount >= 0) {
    // every time the "-" button gets clicked this if statement is going to evaluate if the new number of teams is higher or equal to 2

    anotherNumber.innerHTML = teamsCount;
    const teamsList = document.querySelectorAll(".team"); // takes a collection of teams
    const lastTeam = teamsList[teamsList.length - 1]; // selects the last team from the list of teams
    const list = lastTeam.querySelectorAll("ul li"); // creates a list of all the names there were in the last team before erasing it

    if (list) {
      // if a list exists, proceed
      for (let i = 0; i < list.length; i++) {
        const li = list[i];
        unOrderedList.appendChild(li); // pushes every name back into the original UL
      }
    }
    lastTeam.remove();
  }
}
let teamIndex = 0; // keeps track of the latest team where a person got added

// 6. Assign members button, assign all the members in teams
function assign() {
  const validRandomPos = Math.floor(
    Math.random() * unOrderedList.children.length
  );
  const person = unOrderedList.children[validRandomPos];

  if (person) {
    // if a node exists, proceed
    const teams = document.querySelectorAll(".team > ul"); // creates an array of all the unordered lists inside of any .team div

    if (teamIndex === teamsCount) {
      teamIndex = 0;
    } // restarts from the first team when the last one got filled

    teams[teamIndex].appendChild(person); // selects the team with the current teamIndex and adds the person node into it

    teamIndex++;
  }
}

// EXTRA 2 erases everything that needs to be cleared
function reset() {
  unOrderedList.innerHTML = "";
  teamsRow.innerHTML = "";
  inputName.value = "";
  teamsCount = 2;
  teamIndex = 0;
  anotherNumber.innerHTML = 2;

  createTeams(); // creates the initial 2 teams again (like in the window.onload)
}
