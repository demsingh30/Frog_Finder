


async function getFrog () {
  frogName = document.querySelector('#frogName ').value
  console.log(frogName)
  const response = await fetch(`/api/${frogName}`)
  const data = await response.json()
  console.log(data)
  document.querySelector('#frogSize').textContent = data.size
  document.querySelector('#frogColors').textContent = data.colors
  document.querySelector('#frogFact').textContent = data.funFact
  document.querySelector('img').src = data.image
}


button = document.querySelector('#findFrog') 

button.addEventListener('click' , getFrog) 