console.log("welcome to spotify");


//Initalize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
    
        {songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
         {songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
         {songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
         {songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
         { songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
        { songName: "salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
           
]


 //autdioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
    }
    })



//  Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  //update Seekbar
})