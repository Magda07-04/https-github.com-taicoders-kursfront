//! STANDARDOWA FUKCJA
// function test (word) {
//   console.log('Hello '+word)
// }
//! TA SAMA FUNKCJA STRZAŁKOWA
// const test = word => {
//   console.log('Hello '+word)
// }
// test('world')

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

let list = []

// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=50.2649&lon=19.0238&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl')
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=12.3714&lon=1.5197&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl')
// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=23.6345&lon=1.5197&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl')
// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=19.4326&lon=99.1332&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl')
.then(res => res.json())
.then(res => {
  // console.log(res)
  // USTAWIAMY MAIN HEADER
  document.querySelector(".city h2").innerText = res.city.name
  document.querySelector("img").src = "https://countryflagsapi.com/svg/"+res.city.country
  document.querySelector(".city .sunrise").innerText = timeConverter(res.city.sunrise);
  document.querySelector(".city .sunset").innerText = timeConverter(res.city.sunset);

  list = res.list
  changeCubeInfo(0)
  // console.log(res.list[0])
  // for(const cube of res.list){
  // makeWeatherCube(res.list[0])
  // }  
})


// const makeWeatherCube = params => {
//   console.log(params)
//   const cube = document.createElement("div")
//   cube.className = "cube"
//   cube.innerText = "siemanko"
//   document.querySelector(".content").append(cube)

//   // stwórz nowy div (DOM)
//   const dt_txt = document.createElement("div")
//   // wpisz do niego wartość z API
//   dt_txt.innerText = params.dt_txt;
//   // przypnij go do cube'a
//   cube.append(dt_txt)

// }




const changeCubeInfo = index => {
  console.log( "EL: ", list[index])
  document.querySelector(".cube h3 span").innerHTML = list[index].dt_txt
  document.querySelector(".cube h3 img").src = 
  `https://openweathermap.org/img/wn/${list[index].weather[0].icon}.png`

  document.querySelector(".cube h4").innerText = list[index].weather[0].description;

  document.querySelector(".weatherMain h3").innerHTML = list[index].main.feels_like + "°C"
  
  document.querySelector(".minMax .min").innerHTML = list[index].main.temp_min + "°C"
  document.querySelector(".minMax .max").innerText = list[index].main.temp_max + "°C"


}