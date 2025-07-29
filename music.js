const playlist = [
  "music/playlist/Birthday Boy.mp3",
  "music/playlist/Rilkean Heart.mp3", 
  "music/playlist/Everywhere.mp3",
  "music/playlist/Off Your Face.mp3",
  "music/playlist/I Remember.mp3",
  "music/playlist/Movinin on you.mp3",
  "music/playlist/Little Spacey.mp3",
  "music/playlist/Age of Consent.mp3",
  "music/playlist/Sometimes.mp3",
  "music/playlist/Heres Where The Story Ends.mp3",
  "music/playlist/Nothing Sweet.mp3",
  "music/playlist/Your Selfish Ways.mp3",
  "music/playlist/Tishbite.mp3",
  "music/playlist/Suzanne.mp3",
  "music/playlist/Drive It All Over Me.mp3"
];

var currentSong = 0;

var music = document.getElementById("cassette-audio");

function playMusic(){
    music.play();
}

function pauseMusic(){
    music.pause();
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
    document.getElementById("current-song-display").textContent = playlist[currentSong];

}