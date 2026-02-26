document.addEventListener("DOMContentLoaded", function(){
document.getElementById("year").textContent = new Date().getFullYear();
  
  // ===== DYNAMIC THEMES =====
  const body = document.body;
  const list = document.querySelectorAll("li");
  const profile = document.querySelector(".profile-pic");
  const themeBtn = document.getElementById("themeBtn");

  const themes = [
    {bg:"#ffb347", text:"#333", border:"#ff6347"},  // soft orange
    {bg:"#87cefa", text:"#000", border:"#1e90ff"},  // sky blue
    {bg:"#dda0dd", text:"#000", border:"#8b008b"},  // plum
    {bg:"#98fb98", text:"#000", border:"#32cd32"},  // light green
    {bg:"#ffe4e1", text:"#000", border:"#ff69b4"},  // misty rose
  ];

  let themeIndex = 0;

  themeBtn.addEventListener("click", function(){
    themeIndex++;
    if(themeIndex >= themes.length) themeIndex = 0;
    const current = themes[themeIndex];
    body.style.backgroundColor = current.bg;
    body.style.color = current.text;
    list.forEach(li => li.style.borderColor = current.border);
    profile.style.borderColor = current.border;
  });


  // ===== MUSIC PLAYLIST =====
  const playlist = [
    {
      name:"Song 1-->Powfu:dead_bed",
      url:"https://image2url.com/r2/default/audio/1771985605073-0c5efb82-006f-4dd9-b317-1d23636e37bf.mp3"
    },
    {
      name:"Song 2",
      url:"https://image2url.com/r2/default/audio/1771983188136-f94a1ca5-f9cf-4aa2-9e3c-3dd919949c4e.mp3"
    }
  ];

  let songIndex = 0;

  // Select buttons & UI
  const playBtn = document.getElementById("playBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const songName = document.getElementById("songName");
  const progressBar = document.getElementById("progressBar");

  // Create audio object
  let music = new Audio(playlist[songIndex].url);
  music.volume = 0.4;

  function loadSong(index){
    // Pause current song
    music.pause();
    music.src = playlist[index].url;
    music.currentTime = 0;
    music.play();
    playBtn.textContent = "⏸ Pause";
    songName.textContent = "🎵 " + playlist[index].name;
  }

  // PLAY / PAUSE
  playBtn.addEventListener("click", function(){
    if(music.paused){
      music.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      music.pause();
      playBtn.textContent = "▶ Play";
    }
  });

  // NEXT SONG
  nextBtn.addEventListener("click", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

  // PREVIOUS SONG
  prevBtn.addEventListener("click", function(){
    songIndex--;
    if(songIndex < 0) songIndex = playlist.length - 1;
    loadSong(songIndex);
  });

  // AUTO NEXT WHEN SONG ENDS
  music.addEventListener("ended", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

  // UPDATE PROGRESS BAR
  music.addEventListener("timeupdate", function(){
    if(music.duration){
      const progressPercent = (music.currentTime / music.duration) * 100;
      progressBar.style.width = progressPercent + "%";
    }
  });

});
