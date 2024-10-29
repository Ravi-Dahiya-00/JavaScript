// defining a variable is in 3 types

// var name="Ravi";
// let name="Ravi";
// const name="Ravi";





// Demonstrating the three types of variable declarations

// Using var
var varName = "Ravi (var)";

// Using let
let letName = "John (let)";

// Using const
const constName = "Alice (const)";

// Function to display the variables
function displayVariables() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>var name: ${varName}</p>
        <p>let name: ${letName}</p>
        <p>const name: ${constName}</p>
    `;
}

// Call the function when the page loads
window.onload = displayVariables;