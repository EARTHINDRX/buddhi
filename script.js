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

// Add click event listener to the login button

    const enteredPin = pinInput.value.trim();

    if (enteredPin === defaultPin) {
        window.open("bar.html", "_blank");
        window.close();
        pinInput.value = "";
    } else {
        alert("Incorrect PIN. Please try again.");
        pinInput.value = "";
    }
});

const audio = new Audio();
audio.src = "./click.mp3";
