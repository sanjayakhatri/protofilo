document.addEventListener("DOMContentLoaded", function(){

  // ================= LINE-BY-LINE ANIMATION =================
  const animatedElements = document.querySelectorAll(".animate");
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 300);
  });

  // ================= DYNAMIC THEMES =================
  const body = document.body;
  const list = document.querySelectorAll("li");
  const profile = document.querySelector(".profile-pic");
  const themeBtn = document.getElementById("themeBtn");

  const themes = [
    {bg:"#ffb347", text:"#333", border:"#ff6347"},  // soft orange
    {bg:"#87cefa", text:"#000", border:"#1e90ff"},  // sky blue
    {bg:"#dda0dd", text:"#000", border:"#8b008b"},  // plum
    {bg:"#98fb98", text:"#000", border:"#32cd32"},  // light green
    {bg:"#ffe4e1", text:"#000", border:"#ff69b4"}   // misty rose
  ];

  let themeIndex = 0;

  // Default theme on load
  const defaultTheme = themes[themeIndex];
  body.style.backgroundColor = defaultTheme.bg;
  body.style.color = defaultTheme.text;
  list.forEach(li => li.style.borderColor = defaultTheme.border);
  profile.style.borderColor = defaultTheme.border;

  themeBtn.addEventListener("click", function(){
    themeIndex++;
    if(themeIndex >= themes.length) themeIndex = 0;
    const current = themes[themeIndex];
    body.style.backgroundColor = current.bg;
    body.style.color = current.text;
    list.forEach(li => li.style.borderColor = current.border);
    profile.style.borderColor = current.border;
  });

  // ================= MUSIC CONTROLS =================
  const playlist = [
    {
      name:"Powfu: dead-bed",
      url:"https://image2url.com/r2/default/audio/1771985605073-0c5efb82-006f-4dd9-b317-1d23636e37bf.mp3"
    },
    {
      name:"Powfu: another-song",
      url:"https://image2url.com/r2/default/audio/1771983188136-f94a1ca5-f9cf-4aa2-9e3c-3dd919949c4e.mp3"
    }
  ];

  let songIndex = 0;
  let music = new Audio(playlist[songIndex].url);
  music.volume = 0.4;

  const playBtn = document.getElementById("playBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const songName = document.getElementById("songName");
  const progressBar = document.getElementById("progressBar");

  function loadSong(index){
    music.pause();
    music.src = playlist[index].url;
    music.currentTime = 0;
    music.play();
    playBtn.textContent = "⏸ Pause";
    songName.textContent = "🎵 " + playlist[index].name;
  }

  playBtn.addEventListener("click", function(){
    if(music.paused){
      music.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      music.pause();
      playBtn.textContent = "▶ Play";
    }
  });

  nextBtn.addEventListener("click", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

  prevBtn.addEventListener("click", function(){
    songIndex--;
    if(songIndex < 0) songIndex = playlist.length - 1;
    loadSong(songIndex);
  });

  music.addEventListener("ended", function(){
    songIndex++;
    if(songIndex >= playlist.length) songIndex = 0;
    loadSong(songIndex);
  });

  music.addEventListener("timeupdate", function(){
    if(music.duration){
      const progressPercent = (music.currentTime / music.duration) * 100;
      progressBar.style.width = progressPercent + "%";
    }
  });

});
