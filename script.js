console.log("welcome to spotify");


//Initalize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
    
        {songName: "a-salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/1.jpg"},
         {songName: "b-salam-e-Ishq" , filePath: "Song/2.mp3" , CoverPath: "covers/2.jpg"},
         {songName: "c-salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/3.jpg"},
         {songName: "d-salam-e-Ishq" , filePath: "Song/2.mp3" , CoverPath: "covers/4.jpg"},
         { songName: "e-salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/5.jpg"},
        { songName: "f-salam-e-Ishq" , filePath: "Song/2.mp3" , CoverPath: "covers/6.jpg"},
        { songName: "g-salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/7.jpg"},
        { songName: "h-salam-e-Ishq" , filePath: "Song/2.mp3" , CoverPath: "covers/8.jpg"},
        { songName: "i-salam-e-Ishq" , filePath: "Song/1.mp3" , CoverPath: "covers/9.jpg"},
        { songName: "j-salam-e-Ishq" , filePath: "Song/2.mp3" , CoverPath: "covers/10.jpg"},
           
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
audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  //update Seekbar

  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
  console.log (progress);

  myProgressBar.value = progress;

  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })
})