let arr = ["Rock", "Paper", "Scissors"];

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function getComputerChoice() {
    console.log(arr[Math.floor(random(1, 4)) - 1]);
}

getComputerChoice();
