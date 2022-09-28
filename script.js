document
.querySelectorAll(".project")
.forEach( project => {
  project.onclick = () => {
    document.querySelector('.display h3').innerText = project.querySelector('h3').innerText
    document.querySelector('.display p').innerText = project.querySelector('p').innerText
    document.querySelector('.display img').src = project.querySelector('img').src
    document.querySelector('.display a').href = project.querySelector('a').href
  }
})