let firstUser = document.getElementById("firstUser");
let secondUser = document.getElementById("secondUser");
let table = document.getElementById("table");
let user1 = prompt("Enter user1 name");
let user2 = prompt("Enter user2 name");
let td = document.getElementsByTagName("td");
let check = 0;
let winStatus = false;
function startGame() {
  if (firstUser.value == "x") {
    secondUser.value = "o";
  } else if (firstUser.value == "o" || firstUser.value == "0") {
    secondUser.value = "x";
  }
  if (
    (firstUser.value == "x" && secondUser.value == "o") ||
    firstUser.value == "0"
  ) {
    table.style.display = "block";
  } else if (
    (firstUser.value == "o" && secondUser.value == "x") ||
    firstUser.value == "0"
  ) {
    table.style.display = "block";
  } else {
    alert("Enter correct data");
  }
}
function game_programe(a) {
  if (check == 0 && a.innerText == "" && winStatus == false) {
    a.innerText = firstUser.value;
    a.style.backgroundColor = "greenyellow";
    a.style.color = "white";
    check = 1;
    check_Win();
  } else if (check == 1 && a.innerText == "" && winStatus == false) {
    a.innerText = secondUser.value;
    a.style.backgroundColor = "yellow";
    a.style.color = "black";

    check = 0;
    check_Win();
  } else if (winStatus == true) {
    alert("please reload the game");
    window.location.reload();
  }
}
function check_Win() {
  let first = firstUser.value;
  let second = secondUser.value;
  if (
    (td[0].innerText == first &&
      td[1].innerText == first &&
      td[2].innerText == first) ||
    (td[3].innerText == first &&
      td[4].innerText == first &&
      td[5].innerText == first) ||
    (td[6].innerText == first &&
      td[7].innerText == first &&
      td[8].innerText == first) ||
    (td[0].innerText == first &&
      td[3].innerText == first &&
      td[6].innerText == first) ||
    (td[1].innerText == first &&
      td[4].innerText == first &&
      td[7].innerText == first) ||
    (td[2].innerText == first &&
      td[5].innerText == first &&
      td[8].innerText == first) ||
    (td[0].innerText == first &&
      td[4].innerText == first &&
      td[8].innerText == first) ||
    (td[2].innerText == first &&
      td[4].innerText == first &&
      td[6].innerText == first)
  ) {
    alert(user1 + " win");
    winStatus = true;
  } else if (
    (td[0].innerText == second &&
      td[1].innerText == second &&
      td[2].innerText == second) ||
    (td[3].innerText == second &&
      td[4].innerText == second &&
      td[5].innerText == second) ||
    (td[6].innerText == second &&
      td[7].innerText == second &&
      td[8].innerText == second) ||
    (td[0].innerText == second &&
      td[4].innerText == second &&
      td[8].innerText == second) ||
    (td[0].innerText == second &&
      td[3].innerText == second &&
      td[6].innerText == second) ||
    (td[2].innerText == second &&
      td[5].innerText == second &&
      td[8].innerText == second) ||
    (td[1].innerText == second &&
      td[4].innerText == second &&
      td[7].innerText == second) ||
    (td[0].innerText == second &&
      td[4].innerText == second &&
      td[8].innerText == second) ||
    (td[2].innerText == second &&
      td[4].innerText == second &&
      td[6].innerText == second)
  ) {
    winStatus = true;
    alert(user2 + " win");
  }
}
