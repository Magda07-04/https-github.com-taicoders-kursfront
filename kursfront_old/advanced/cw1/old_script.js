// NUMBER
  const x = 1.11;
  // x = 2;
  let y = 2;
  y = 3;
  // console.log(x)
  // console.log(y)
  // console.log(x +" i "+ y )
  // console.log(x , y)

// STRING
  const name = "John";
  // console.log(name + " Doe")

// OBJECT
  const person = {
    name: "John",
    age: 30,
  }

  // console.log(person['name'])
  // console.log(console)
// ARRAY
  const people = ["John", "Doe", "Jane"];
  // console.log(people[1])
  // console.log(people)


// FUNCTION
function sayHello(){
  console.log("Hello")
}

// sayHello()
// sayHello()
  // argument
function say( name ){
  console.log("Hello " + name)
}
// say("John")
// say("Mary")


// RETURN - zwracanie
function add(x, y){
  return x + y
}

// console.log( add(3,2) )
// console.log( say('Adam') )

// pobieranie elementów z HTML'a
const dom = document.querySelector('.subtitle')
dom.innerHTML = "Hello from JS"
// console.log(dom)

// tworzenie elementu JS i dodawanie do HTML'a
const newDOM = document.createElement("div")
newDOM.innerHTML = "test"
// console.log(newDOM)

dom.append(newDOM)


// EVENTS (wydarzenia)
newDOM.onclick = function(){
  console.log("kliknięto")
}

const a = 6;
const b = 5;

if(a < b){
  // wykonaj jeśli prawda
  console.log("A jest mniejsze")
}else{ 
  // wykonaj jeśli fałsz
  console.log("A jest większe")
}
