var songs = ["Migos_Narcos.mp3","Lil_Peep_White_Girl.mp3","Lil_Dude_Feelings.mp3"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var playPause = document.querySelector("#play i");

var song = new Audio();
var currentSong = 0;

window.onload = playSong;


function playSong(){

    song.src = songs[currentSong];

    songTitle.textContent = songs[currentSong];

    song.play();
}

function playOrPauseSong(){

    if(song.paused){
        song.play();
        playPause.removeAttribute('class');
        playPause.setAttribute('class', 'fas fa-pause');
    }
    else{
        song.pause();
        playPause.removeAttribute('class');
        playPause.setAttribute('class', 'fas fa-play');
    }
}

song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 +'%';

    var timeStart = document.getElementById("timeStart");
    var sec = Math.floor(song.currentTime / 60) + ': ' + Math.floor(song.currentTime % 60);
    timeStart.innerHTML = sec;

    var timeEnd = document.getElementById("timeEnd");
    var sec2 = Math.floor(song.duration / 60) + ': ' + Math.floor(song.duration % 60);
    timeEnd.innerHTML = sec2;
});



function next(){

    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    /*$("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);*/
}

function pre(){

    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    /*$("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);*/
}