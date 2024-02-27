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

// Add event listener to the login button
loginButton.addEventListener("click", () => { 
    
    if (pinInput.value === defaultPin) {
        // Hide the login screen and the number buttons
        if (pinInput.value === defaultPin) {
            document.getElementById("login-button").click();
        }
        document.getElementById("login-button").addEventListener("click", function() {
            window.open("buddhi.html", "_blank");
                });
        
    } else {
        alert("Incorrect PIN. Please try again.");
        // Clear the pinInput when PIN is incorrect
        pinInput.value = "";
    }
});



