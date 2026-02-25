document.addEventListener("DOMContentLoaded", function(){

  // ===== THEME SYSTEM =====
  let themeIndex = 0;
  const body = document.body;
  const list = document.querySelectorAll("li");
  const profile = document.querySelector(".profile-pic");
  const themeBtn = document.getElementById("themeBtn");

  const themes = [
    {bg:"black", text:"lime", border:"lime"},
    {bg:"navy", text:"white", border:"yellow"},
    {bg:"purple", text:"gold", border:"gold"},
    {bg:"darkgreen", text:"white", border:"white"},
    {bg:"white", text:"black", border:"red"}
  ];

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
    "https://image2url.com/r2/default/audio/1771985605073-0c5efb82-006f-4dd9-b317-1d23636e37bf.mp3",
    "https://image2url.com/r2/default/audio/1771983188136-f94a1ca5-f9cf-4aa2-9e3c-3dd919949c4e.mp3"
  ];

  let songIndex = 0;
  const playBtn = document.getElementById("playBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const music = new Audio(playlist[songIndex]);
  music.loop = false;
  music.volume = 0.4;

  function loadSong(index){
    music.pause();
    music.src = playlist[index];
    music.currentTime = 0;
    music.play();
    playBtn.textContent = "⏸ Pause";
  }

  // ▶ Play / Pause
  playBtn.addEventListener("click", function(){
    if(music.paused){
      music.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      music.pause();
      playBtn.textContent = "▶ Play";
    }
  });

  // ⏭ Next
  nextBtn.addEventListener("click", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

  // ⏮ Previous
  prevBtn.addEventListener("click", function(){
    songIndex--;
    if(songIndex < 0) songIndex = playlist.length - 1;
    loadSong(songIndex);
  });

  // Auto next
  music.addEventListener("ended", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

});    loadSong(songIndex);

  });

});
