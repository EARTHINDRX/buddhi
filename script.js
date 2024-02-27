const pinInput = document.getElementById("pin-input");
const loginButton = document.getElementById("login-button");
const buttonContainer = document.getElementById("button-container");
const numberButtons = document.querySelectorAll(".number-button");


// Add event listeners to the number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        // Add the value to the input field
        pinInput.value += value;
    });
});
// Default PIN
const defaultPin = "1234";

// Add an event listener to the login button
loginButton.addEventListener("click", () => {
    if (pinInput.value === defaultPin) {
        // If the entered pin matches the default pin, trigger the login action
        document.getElementById("login-button").click();
    }
});

// Add another event listener to open the "buddhi.html" page
document.getElementById("login-button").addEventListener("click", () => {
    window.open("buddhi.html");
});

        
  else {
        alert("Incorrect PIN. Please try again.");
        // Clear the pinInput when PIN is incorrect
        pinInput.value = "";
    }
});



