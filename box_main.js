/* Working on text hover */

const myText = new SplitType('#hover-text')

gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 1,
})

/* Working on the Hover effect */
const boxes = document.querySelectorAll('.box')

boxes.forEach((element) => createHover(element))

function createHover(element) {
  var tl = gsap.timeline({ paused: true, reversed: true })

  tl.to(element, { opacity: 1, duration: 0.3, height: 150 })

  element.addEventListener('mouseenter', () => {
    tl.reversed() ? tl.play() : tl.reverse()
  })

  element.addEventListener('mouseleave', () => {
    tl.reversed() ? tl.play() : tl.reverse()
  })
}
