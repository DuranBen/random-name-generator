const nameList = ["Osa", "Phil", "Joel", "John", "James", "Jamie", "Mike", "Wenbo", "Andrew", "Kathy", "Zoe", "Etta", "Kate", "Williams", "Sandra", "Mercy", "Lucy", "Daniel", "Ron", "Pamela"];

let output = document.getElementById('outputOfNames');
let generateButton = document.getElementById('Generate');
let clearButton = document.getElementById('Clear');



const randomName = () => {
    
    let listOfRandoms = [];
    let numOfNames = window.prompt("How many names do you want to generate? (Up to 20)");
    if (numOfNames > 20) {
        alert('Please enter a number lower than 20');
    } else {
        for (let i = 0; i < nameList.length; i++) {
            let random = Math.floor(Math.random() * nameList.length);
            listOfRandoms.push(" " + nameList[random]);
            if (listOfRandoms.length === parseInt(numOfNames)) {
                output.innerHTML = listOfRandoms;
            }
        }
    }
};

const clearOutput = () => {
    output.innerHTML = '';
};

generateButton.onclick = randomName;
clearButton.onclick = clearOutput;