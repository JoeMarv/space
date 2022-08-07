destinationMoon = [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
  ]

destinationMars = [
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
]

destinationEuropa = [
  {
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
]

destinationTitan = [
  {
    "name": "Titan",
    "images": {
      "png": "./assets/destination/image-titan.png",
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]



const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')
const btns = document.querySelectorAll('.destination')
const moon = document.querySelector('.moon')
const mars = document.querySelector('.mars')
const europa = document.querySelector('.europa')
const titan = document.querySelector('.titan')
const name = document.querySelector('.destination-name')
const image = document.querySelector('.destination-picture')
const description =  document.querySelector('.destination-description')
const distance =  document.querySelector('.distance')
const time =  document.querySelector('.travel')


menuBtn.addEventListener('click', function() {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})


btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
      btns.forEach(function(item) {
          if (item !== btn) {
              item.classList.remove('active')
          } 
      })

    btn.classList.add('active')
  })
})


window.addEventListener('DOMContentLoaded', function() {
  displayMoonContents(destinationMoon)
})


btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (moon.classList.contains('active')) {
      displayMoonContents(destinationMoon)
    }

    else if (mars.classList.contains('active')) {
      displayMarsContents(destinationMars)
    }

    else if (europa.classList.contains('active')) {
      displayEuropaContents(destinationEuropa)
    }

    else {
      displayTitanContents(destinationTitan)
    }
  })
})



function displayMoonContents(moonContents) {
  let displayMoonName = moonContents.map(function(item) {
    const nameItem = item.name

    return `<h1>${nameItem}</h1>`
  })

  let displayMoonImage = moonContents.map(function(item) {
    const pictureItem = item.images.png

    return `<img src="${pictureItem}">`
  })

  let displayMoonDescription = moonContents.map(function(item) {
    const aboutItem = item.description

    return `<span>${aboutItem}</span>`
  })

  let displayMoonDistance = moonContents.map(function(item) {
    const distanceItem = item.distance

    return `<h3>AVG. DISTANCE</h3>
            <h1>${distanceItem}</h1>`
  })

  let displayMoonTime = moonContents.map(function(item) {
    const timeItem = item.travel

    return `<h3>EST. TRAVEL TIME</h3>
            <h1>${timeItem}</h1>`
  })


  name.innerHTML = displayMoonName
  image.innerHTML = displayMoonImage
  description.innerHTML = displayMoonDescription
  distance.innerHTML = displayMoonDistance
  time.innerHTML = displayMoonTime
}


function displayMarsContents(marsContents) {
  let displayMarsName = marsContents.map(function(item) {
    const nameItem = item.name

    return `<h1>${nameItem}</h1>`
  })

  let displayMarsImage = marsContents.map(function(item) {
    const pictureItem = item.images.png

    return `<img src="${pictureItem}">`
  })

  let displayMarsDescription = marsContents.map(function(item) {
    const aboutItem = item.description

    return `<span>${aboutItem}</span>`
  })

  let displayMarsDistance = marsContents.map(function(item) {
    const distanceItem = item.distance

    return `<h3>AVG. DISTANCE</h3>
            <h1>${distanceItem}</h1>`
  })

  let displayMarsTime = marsContents.map(function(item) {
    const timeItem = item.travel

    return `<h3>EST. TRAVEL TIME</h3>
            <h1>${timeItem}</h1>`
  })


  name.innerHTML = displayMarsName
  image.innerHTML = displayMarsImage
  description.innerHTML = displayMarsDescription
  distance.innerHTML = displayMarsDistance
  time.innerHTML = displayMarsTime
}


function displayEuropaContents(europaContents) {
  let displayEuropaName = europaContents.map(function(item) {
    const nameItem = item.name

    return `<h1>${nameItem}</h1>`
  })

  let displayEuropaImage = europaContents.map(function(item) {
    const pictureItem = item.images.png

    return `<img src="${pictureItem}">`
  })

  let displayEuropaDescription = europaContents.map(function(item) {
    const aboutItem = item.description

    return `<span>${aboutItem}</span>`
  })

  let displayEuropaDistance = europaContents.map(function(item) {
    const distanceItem = item.distance

    return `<h3>AVG. DISTANCE</h3>
            <h1>${distanceItem}</h1>`
  })

  let displayEuropaTime = europaContents.map(function(item) {
    const timeItem = item.travel

    return `<h3>EST. TRAVEL TIME</h3>
            <h1>${timeItem}</h1>`
  })


  name.innerHTML = displayEuropaName
  image.innerHTML = displayEuropaImage
  description.innerHTML = displayEuropaDescription
  distance.innerHTML = displayEuropaDistance
  time.innerHTML = displayEuropaTime
}


function displayTitanContents(titanContents) {
  let displayTitanName = titanContents.map(function(item) {
    const nameItem = item.name

    return `<h1>${nameItem}</h1>`
  })

  let displayTitanImage = titanContents.map(function(item) {
    const pictureItem = item.images.png

    return `<img src="${pictureItem}">`
  })

  let displayTitanDescription = titanContents.map(function(item) {
    const aboutItem = item.description

    return `<span>${aboutItem}</span>`
  })

  let displayTitanDistance = titanContents.map(function(item) {
    const distanceItem = item.distance

    return `<h3>AVG. DISTANCE</h3>
            <h1>${distanceItem}</h1>`
  })

  let displayTitanTime = titanContents.map(function(item) {
    const timeItem = item.travel

    return `<h3>EST. TRAVEL TIME</h3>
            <h1>${timeItem}</h1>`
  })


  name.innerHTML = displayTitanName
  image.innerHTML = displayTitanImage
  description.innerHTML = displayTitanDescription
  distance.innerHTML = displayTitanDistance
  time.innerHTML = displayTitanTime
}