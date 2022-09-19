// grupa danych (slajdów) (tablica array)
const data = [
  // pojedynczy slajd (object)
  {
    // tytul
    title : "Pink lake",
    // źródło zdjęcia
    src: "1.webp",
  },
  // ANALOGICZNIE: 
  {
    title : "Single Island",
    src: "2.webp",
  },
  {
    title : "Forest lake",
    src: "3.webp",
  },
]

// blok kodu wywołujący się tam, gdzie wspomnimy "changeHTMLInfo" z numeren slajdu
function changeHTMLInfo( slideNr ){
  // pobieramy tytuł na podstawie numeru slajdu z danych
  const title = data[slideNr].title
  // pobieramy tag H2 z dokumentu HTML
  const titleDOM = document.querySelector("h2")
  // do pobranego tagu wpisujemy pobraną treść 
  titleDOM.innerHTML = title

  // ANALOGICZNIE: 
  const image = data[slideNr].src
  const imageDOM = document.querySelector("img")
  imageDOM.src = "img/"+image
}

// ustaw zmienną sterującą globalnie slajdami
let currSlide = 1;
// wywołaj domyślny slajd (wrzuć info do HTML)
changeHTMLInfo(currSlide)

// do stałej leftArr przypisujemy klasę "leftArr" z dokumentu HTML
const leftArr = document.querySelector(".leftArr")
// obsługujemy kliknięcie w element .leftArr
leftArr.onclick = function(){
  // wywołujemy zmianę slajdu z parametrem left
  changeSlide( "left" )
}

// ANALOGICZNIE: 
document.querySelector(".rightArr").onclick = () => {
  changeSlide( "right" )
}

// blok kodu zmieniający slajd w zależności od kierunku (left / right)
// zmienia numer slajdu
function changeSlide( direction ){
  // sprawdź, czy kierunek jest "left"
  if( direction == "left" ){
    // zmniejsz licznik slajdu o 1 (przełącz na slajd po lewej stronie)
    currSlide--
  }else{ // jeśli nie
    // zwiększ licznik slajdu o 1 (przełącz na slajd po prawej stronie)
    currSlide++
  }

  // blokujemy wyświetlanie slajdów które nie istnieją (-1 itd.. )
  // jeśli slajdy w lewo się skończyły - włącz skrajny prawy
  if(currSlide < 0){
    // włącz ostatni slajd po prawej stonie
    currSlide = 2
  }

  // ANALOGICZNIE
  if(currSlide > 2){
    currSlide = 0
  }

  // wywołaj funkcję zmieniającą info w HTML z nowym numerem slajdu
  changeHTMLInfo(currSlide)
}
