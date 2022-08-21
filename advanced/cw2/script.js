const gamePlane = document.querySelector(".gamePlane")
gamePlane.style.cssText = `
  border:2px dashed red;
  height:100vh;
  position:relative;
`

function makeWall(x, y, w, h, type = "wall"){
  const wall = document.createElement("div")
  let color = 'red';

  switch( type ){
    case "start":
      color = 'green';
      // wall.onclick = function(){ game.start() } // tradycyjna funkcja
      wall.onclick = () => { game.start() } // funckcja strzałkowa (arrow function)
      break;
    case "meta":
      color = 'blue';
      wall.onclick = () => { game.over('win') } // funckcja strzałkowa (arrow function)
      break;
  }

  wall.style.cssText = `
    position:absolute;
    background-color:${color};
    width:${w}%;
    height:${h}%;
    left:${x}%;
    top:${y}%;  
  `
  gamePlane.append(wall)
}

const map = [
  [0, 0, 20, 20, 'start'],
  [20, 10, 40, 10],
  [50, 20, 10, 60],
  [50, 80, 30, 10],
  [80, 80, 20, 20, 'meta']
]

for( const wall of map ){
  makeWall(...wall)
}


const game = {
  start(){
    console.log("game started")
    gamePlane.addEventListener('mousemove', game.watch)
    document.querySelectorAll(".gamePlane div").forEach( wall => {
      wall.addEventListener('mousemove', e => {
        e.stopPropagation()
      })
    })

  },
  watch(){
    game.over('lose')
  },

  over( result ){

    gamePlane.removeEventListener('mousemove', game.watch)

    switch(result){
      case 'win':
        alert("YOU WIN!");
        break;
      case 'lose':
        alert("YOU LOSE!");
        break;
    }


  }


}