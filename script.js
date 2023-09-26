// console.log("Welcome To Spotify")
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song1.m4a');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let playingicon = document.getElementById('playingicon');


let songs = [
    { songName: "Flight-of-the-stars", filePath: "song1.m4a"}

]

// play/pause event
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        playingicon.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        playingicon.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', () => {
    //updateprogressbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})