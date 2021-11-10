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

const getShuffledCards = (nums) => {
    const orderedNums = nums; // immutability
    const shuffledNums = [];
    while (shuffledNums.length !== orderedNums.length) {
      const random = parseInt(Math.random() * 10); // since Math.random returns floating point
      if (random && !shuffledNums.includes(random)) {
        shuffledNums.push(random);
      }
    }
    console.log(shuffledNums);
    return shuffledNums;
};

const renderCards = (_nums) => {
    const nums = _nums; // immutability
    const arrElements = document.querySelectorAll(".card-grid div");
    nums.forEach((val, index) => {
      arrElements[index].innerHTML = val;
      arrElements[index].style.setProperty("--card-color", initialState[val]);
    });
};

const sortCards = () => {
    renderCards(initialStateNums);
};
const shuffleCards = () => {
    const shuffledCards = getShuffledCards(initialStateNums);
    renderCards(shuffledCards);
};

window.onload = function () {
    renderCards(initialStateNums);
};