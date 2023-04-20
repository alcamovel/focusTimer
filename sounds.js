export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forest = new Audio("sounds/Floresta.wav")
  const rain = new Audio("sounds/Chuva.wav")
  const coffee = new Audio("sounds/Cafeteria.wav")
  const fireplace = new Audio("sounds/Lareira.wav")
  

  
  forest.loop= true
  rain.loop = true
  coffee.loop = true
  fireplace.loop = true
  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function stopSound() {
    forest.pause()
    rain.pause()
    coffee.pause()
    fireplace.pause()
  }
  
  return {
    pressButton,
    timeEnd,
    forest,
    rain,
    coffee,
    fireplace,
    stopSound
  }
}

