const playlist = [
  "music/playlist/Birthday Boy.mp3",
  "music/playlist/Off Your Face.mp3",
  "music/playlist/Roseblood.mp3",
  "music/playlist/Rilkean Heart.mp3",
  "music/playlist/Sarah.mp3",
  "music/playlist/Born Slippy.mp3",
  "music/playlist/I Remember.mp3",
  "music/playlist/Movinin on you.mp3",
  "music/playlist/A Certain Someone.mp3",
  "music/playlist/The Last Hour.mp3",
  "music/playlist/Little Spacey.mp3",
  "music/playlist/Age of Consent.mp3",
  "music/playlist/Sometimes.mp3",
  "music/playlist/Heres Where the Story Ends.mp3",
  "music/playlist/Everywhere.mp3",
  "music/playlist/Spinning.mp3",
  "music/playlist/Nothing Sweet.mp3",
  "music/playlist/Your Selfish Ways.mp3",
  "music/playlist/Tishbite.mp3",
  "music/playlist/Drive It All Over Me.mp3",
  "music/playlist/Suzanne.mp3"
];

var currentSong = 0;

var music = document.getElementById("cassette-audio");

function playMusic(){
    music.play();
    document.getElementById("cassette-img-container").style.backgroundImage = 'url("page_assets/cassette.gif")';
}

function pauseMusic(){
    music.pause();
    document.getElementById("cassette-img-container").style.backgroundImage = 'url("page_assets/cassette-stopped.png")';
}

function muteMusic(){
    if(music.muted){
        music.muted = false;
    }
    else{
        music.muted = true;
    }
}

function next_song(){
    currentSong++;
    if (currentSong >= playlist.length) {
        currentSong = 0;
    }
    music.src = playlist[currentSong];
    playMusic();
    document.getElementById("cassette-audio").setAttribute("src", playlist[currentSong]);
    document.getElementById("cassette-audio").style.audio
    document.getElementById("cassette-audio").load();
    displaySong();
}

function prev_song(){
    currentSong--;
    if (currentSong < 0) {
        currentSong = playlist.length - 1;
    }
    music.src = playlist[currentSong];
    playMusic();
    document.getElementById("cassette-audio").setAttribute("src", playlist[currentSong]);
    document.getElementById("cassette-audio").style.audio
    document.getElementById("cassette-audio").load();
    displaySong();
}
function displaySong() {
    document.getElementById("song-num").textContent = (currentSong + 1) + "/" + playlist.length
    document.getElementById("current-song-display").textContent = playlist[currentSong];

}

window.onload = function(){
    displaySong();
    document.getElementById("cassette-audio").addEventListener('ended', function() {
        next_song();
    });
}