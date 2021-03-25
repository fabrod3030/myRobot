document.addEventListener('DOMContentLoaded', () => {

     const eyes = document.querySelectorAll('.eye')
     const mask = document.querySelectorAll('.mask')
     const torso = document.querySelectorAll('.torso')
     const robot = document.querySelectorAll('.robot')
     let position = 0

     function changeEyes() {
         eyes.forEach(eye => eye.classList.toggle('blue-eye'))
     }

     mask.addEventListener('click', changeEyes)

     function moveRobot() {
         position += 50
         robot.style.left = position + 'px'
     }

     torso.addEventListener('click', moveRobot)

})