// Open a new window with d.html after 3 seconds
setTimeout(function() {
    window.open("buddhi.html", "_self");
  }, 3000);
  
  // Close the current window after 6 seconds
  setTimeout(function() {
    window.close();
  }, 6000);


  // Set the desired time to play the music in milliseconds
const playTime = 10; // 10 minutes

// Function to play the music
function playMusic() {
    const audio = document.getElementById('music');
    if (audio.readyState) {
        audio.play();
    } else {
        audio.addEventListener('canplay', playMusic);
    }
}

// Set the timeout to trigger the playMusic function at the desired time
setTimeout(playMusic, playTime);