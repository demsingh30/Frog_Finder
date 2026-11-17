const express = require('express')
const app = express() 
const PORT = process.env.PORT || 3000

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
  } ,
  'red eyed tree frog': {
    type: 'Red-eyed tree frog',
    size: '2 to 3 inches',
    colors: 'Bright green with red eyes and blue and orange sides',
    funFact: 'It flashes its red eyes to startle predators',
    image: 'frog_pics/tree_frog.webp'
  },
  'bullfrog': {
    type: 'American bullfrog',
    size: '3.5 to 6 inches',
    colors: 'Green or olive brown',
    funFact: 'It is the largest frog in North America',
    image: 'frog_pics/bullfrog.jpg'
  },
  'tomato frog': {
    type: 'Tomato frog',
    size: '2.5 to 4 inches',
    colors: 'Bright red to orange',
    funFact: 'When scared, it puffs up and oozes a sticky white goo',
    image: 'frog_pics/tomato_frog.jpg'
  },
  'goliath frog': {
    type: 'Goliath frog',
    size: 'Up to 12 inches',
    colors: 'Brown and green',
    funFact: 'It is the largest frog in the world',
    image: 'frog_pics/goliath_frog.webp'
  },
  'wood frog': {
    type: 'Wood frog',
    size: '1.5 to 3 inches',
    colors: 'Tan, brown, or reddish with a dark mask',
    funFact: 'It can freeze solid in winter and thaw out in spring',
    image: 'frog_pics/wood_frog.webp'
  }
}


app.get('/' , (request, response) => {
response.sendFile(__dirname + '/index.html')
}) 



app.use('/css' , express.static('css'))
app.use('/frog_pics' , express.static('frog_pics'))
app.use('/js' , express.static('js') )

app.listen(PORT , () => {
    console.log('It is running')
})

app.get('/api/:frogName' ,  (request, response) => {
   const frogName =  request.params.frogName.toLowerCase()
    if (frogs[frogName]) {
        response.json(frogs[frogName])
    }
    else {
response.json(frogs['unknown'])
    }
} )