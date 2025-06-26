console.log("welcome to spotify");


//Initalize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');




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
    }
    })



//  Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  //update Seekbar
})