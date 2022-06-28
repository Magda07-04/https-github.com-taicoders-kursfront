const data = [
  {
    title : "Pink lake",
    src: "1.webp",
  },
  {
    title : "Single Island",
    src: "2.webp",
  },
  {
    title : "Forest lake",
    src: "3.webp",
  },
]

function changeHTMLInfo( slideNr ){
  const title = data[slideNr].title
  const titleDOM = document.querySelector("h2")
  titleDOM.innerHTML = title
}

changeHTMLInfo(1)