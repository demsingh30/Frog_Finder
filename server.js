const express = require('express')
const app = express() 
const PORT = 3000

console.log('starting')

const frogs = {
  'dart frog': {
    type: 'Poison dart frog',
    size: '1 to 2 inches',
    colors: 'Bright blue, yellow, or red',
    funFact: 'Its bright colors warn predators that it is toxic',
    image: 'frog_pics/dartfrog.jpg'
  },
  'glass frog': {
    type: 'Glass frog',
    size: '1 to 3 inches',
    colors: 'Pale green with a see-through belly',
    funFact: 'You can see its heart through its skin',
    image: 'frog_pics/glass_frog.avif'
  },
  'whites tree frog': {
    type: "White's tree frog",
    size: 'Up to 4 inches',
    colors: 'Green or brown',
    funFact: 'Often lives 15+ years in captivity',
    image: 'frog_pics/whites.jpg'
  },
  'unknown': {
    type: 'Mystery frog',
    size: 'Unknown',
    colors: 'Unknown',
    funFact: 'We have not met this frog yet',
    image: 'frog_pics/unknown.png'
  }
}


app.get('/' , (request, response) => {
response.sendFile(__dirname + '/index.html')
}) 



app.use('/css' , express.static('css'))
app.use('/frog_pics' , express.static('frog_pics'))

app.listen(PORT , () => {
    console.log('It is running')
})

app.get('/api/:frogName' ,  (request, response) => {
   const frogName =  request.params.frogName.toLowerCase()
    if (frogs[frogName]) {
        console.log(response.json(frogs[frogName])) 
    }
    else {
response.json(frogs['unknown'])
    }
} )