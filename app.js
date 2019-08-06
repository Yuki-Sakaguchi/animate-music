window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound')
  const pads = document.querySelectorAll('.pads > div')
  const visual = document.querySelector('.visual')
  const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3'
  ]

  /**
   * 泡を生成してアニメーションさせる
   * @param {number} index 
   */
  const createBubbles = (index) => {
    const bubble = document.createElement('div')
    visual.appendChild(bubble)
    bubble.style.backgroundColor = colors[index]
    bubble.style.animation = 'jumb 1s ease'
    bubble.addEventListener('animationend', () => {
      visual.removeChild(bubble)
    })
  }

  /**
   * 音声再生
   * @param {number} index 
   */
  const playSound = (index) => {
    sounds[index].currentTime = 0
    sounds[index].play()
    createBubbles(index)
  }

  /**
   * クリックで再生
   */
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => playSound(index))
  })

  /**
   * キーボードでも再生できるように
   */
  document.addEventListener('keydown', (key) => {
    const baseKeyCode = 49 // キーボードの1
    if (key.keyCode >= baseKeyCode && key.keyCode <= (baseKeyCode + sounds.length-1)) {
      playSound(key.keyCode - baseKeyCode)
    }
  })

})