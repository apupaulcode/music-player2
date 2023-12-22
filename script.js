let currentMusic = 0;
const music = document.querySelector("#audio")
const seekBar = document.querySelector(".seek-bar")
const songName = document.getElementsByTagName("h1")
const artistName = document.getElementsByTagName("h3")
const currentTime = document.querySelector("current-time")
const songDuration = document.querySelector("song-duration")
const backward = document.querySelector("fa-backward-step")
const forward = document.querySelector("fa-forward-step")
const play = document.querySelector("fa-play")


play.addEventListener('click',()=>{
    play.classList.remove('fa-play')
    play.classList.add('fa-pause')
})