const boxMaker = () => {
  let i = 0
  while (i <= 11) {
    const box = document.createElement('div')
    box.classList.add('box', `box${i + 1}`)
    document.getElementById('root').appendChild(box)
    box.textContent = `${i + 1}`
    i++
  }
}

boxMaker()
boxMaker()

function colorSwitch() {
  // Switch the current color of box3
  // Select box3
  // Listen for in order signal the color change
  // Execute that event listener

  const box = document.querySelectorAll('.box')

  box.forEach(item => {
    item.addEventListener('mouseenter', e => {
      e.target.style.backgroundColor = 'rebeccapurple'
      e.target.classList.toggle('grow')
    })
    item.addEventListener('mouseleave', e => {
      e.target.removeAttribute('style')
    })
  })
}

colorSwitch()
