// Defining initial state
initialState = {
    1: "#6F98A8",
    2: "#2B8EAD",
    3: "#2F454E",
    4: "#2B8EAD",
    5: "#2F454E",
    6: "#BFBFBF",
    7: "#BFBFBF",
    8: "#6F98A8",
    9: "#2F454E",
};
const initialStateNums = Object.keys(initialState);

const renderCards = (_nums) => {
    const nums = _nums; // immutability
    const arrElements = document.querySelectorAll(".card-grid div");
    nums.forEach((val, index) => {
      arrElements[index].innerHTML = val;
      arrElements[index].style.setProperty("--card-color", initialState[val]);
    });
};


window.onload = function () {
    renderCards(initialStateNums);
};