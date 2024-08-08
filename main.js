gsap.to('.green', {
  rotation: 360,
  x: 1,
  duration: 1,
})

gsap.from('.purple', {
  rotation: 180,
  x: 1,
  duration: 1,
})

gsap.to('.red', {
  rotation: 90,
  x: 1,
  duration: 1,
})

// Using JavaScript to get the
// width of the container

let circleShape = document.getElementById('shape')
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const resumeBtn = document.getElementById('resume')
const reverseBtn = document.getElementById('reverse')
const restartBtn = document.getElementById('restart')

const tween = gsap.to('#shape', {
  duration: 2,
  x: () => circleShape.offsetWidth,
  rotation: 360,
  ease: 'none',
  paused: true,
})

playBtn.addEventListener('click', () => {
  tween.play()
})

pauseBtn.addEventListener('click', () => {
  tween.pause()
})
resumeBtn.addEventListener('click', () => {
  tween.resume()
})
reverseBtn.addEventListener('click', () => {
  tween.reverse()
})
restartBtn.addEventListener('click', () => {
  tween.restart()
})

/* Demo content */

const demo = document.getElementById('demo')
const demoSecond = document.getElementById('demo-second')
const personalContent = document.getElementById('personal')
const title = document.getElementsByClassName('title')
const desc = document.getElementsByClassName('desc')
const btn1 = document.getElementsByClassName('btn1')

var tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic' } })

tl.to(demoSecond, {
  x: 1,
  rotation: 360,
  ease: 'back',
  //   stagger: 0.8,
})

tl.to(title, {
  x: 100,
  rotation: 0,
  //   opacity: 0,
})

tl.play()
