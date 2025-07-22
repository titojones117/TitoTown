const playlist = [
  "music/playlist/Rilkean Heart.mp3",
  "music/playlist/Broadcast - Tears In The Typing Pool [Demo] (Official Audio).mp3",
  "music/playlist/Everywhere (2018 Remaster).mp3",
  "music/playlist/Hazey Jane II.mp3",
  "music/playlist/Hope Sandoval and the Warm Inventions - Suzanne (Official Video) HD.mp3",
  "music/playlist/I Remember.mp3",
  "music/playlist/Julee Cruise Movinin on you (Lyrics).mp3",
  "music/playlist/Little Spacey.mp3",
  "music/playlist/New Order - Age of Consent (2020 Remaster) [Official Music Video].mp3",
  "music/playlist/Place To Be.mp3",
  "music/playlist/Sometimes.mp3",
  "music/playlist/The Sundays - Heres Where The Story Ends (Official Music Video).mp3",
  "music/playlist/The Sundays - Nothing Sweet.mp3",
  "music/playlist/Your Selfish Ways.mp3",
  "music/playlist/Tishbite.mp3"];

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