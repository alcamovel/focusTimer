import Sound from "./sounds.js"
import Sounds from "./sounds.js"


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSetUp = document.querySelector('.setUp')
const buttonSetDown = document.querySelector('.setDown')
const buttonCardA = document.querySelector('.cardA')
const buttonCardB = document.querySelector('.cardB')
const buttonCardC = document.querySelector('.cardC')
const buttonCardD = document.querySelector('.cardD')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
const sound = Sound()

function resetControls() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer () {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countDown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0){
     resetControls()
     Sounds().timeEnd()
     return 
    }
    
    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay (minutes, String(seconds - 1))

    countDown()
 }, 1000)
}

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  resetControls()
  resetTimer()
  sound.pressButton()
  sound.stopSound()
})


buttonSetUp.addEventListener('click', function() {
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  if (minutesDisplay.textContent > 95) {
    updateTimerDisplay(25, 0)

  }
  sound.pressButton()
})

buttonSetDown.addEventListener('click', function() {
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")  
  if (minutesDisplay.textContent < 0) {
    updateTimerDisplay(0, 0)
  }
  sound.pressButton()
})

buttonCardA.addEventListener('click', function () {  
 sound.forest.play()
 sound.coffee.pause()
 sound.rain.pause()
 sound.fireplace.pause()
 
})
buttonCardB.addEventListener('click', function () {
  sound.rain.play()
  sound.coffee.pause()
  sound.forest.pause()
  sound.fireplace.pause()
  
})
buttonCardC.addEventListener('click', function () {
  sound.coffee.play()
  sound.rain.pause()
  sound.forest.pause()
  sound.fireplace()
  
})
buttonCardD.addEventListener('click', function () {
  sound.fireplace.play()
  sound.coffee.pause()
  sound.forest.pause()
  sound.rain.pause()
  
})


