


async function getFrog () {
  frogName = document.querySelector('#frogName ').value
  console.log(frogName)
  const response = await fetch(`/api/${frogName}`)
  const data = await response.json()
  console.log(data)
}


button = document.querySelector('#findFrog ') 

button.addEventListener('click' , getFrog)