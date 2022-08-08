technologyVehicle = [
    {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  }
]

technologySpaceport = [
    {
    "name": "Spaceport",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  }
]

technologyCapsule = [
    {
    "name": "Space capsule",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]


const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')
const btns = document.querySelectorAll('.technology')
const vehicle = document.querySelector('.vehicle')
const spaceport = document.querySelector('.spaceport')
const capsule = document.querySelector('.capsule')
const picture = document.querySelector('.technology-picture')
const about = document.querySelector('.technology-about')

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
    displayVehicleContents(technologyVehicle)
  })  
  
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (vehicle.classList.contains('active')) {
        displayVehicleContents(technologyVehicle)
      }
  
      else if (spaceport.classList.contains('active')) {
        displaySpaceportContents(technologySpaceport)
      }
  
      else {
        displayCapsuleContents(technologyCapsule)
      }
    })
  })

  function displayVehicleContents(technologyVehicle) {
    let displayVehiclePicture = technologyVehicle.map(function(item) {
        const pictureItem = item.images.landscape

        return `<img src="${pictureItem}">`
    })

    let displayVehicleAbout = technologyVehicle.map(function(item) {
        const nameItem = item.name
        const bioItem = item.description

        return `<h2>THE TERMINOLOGY...</h2>

                <div class="technology-name">
                <h1>${nameItem}</h1>
                </div>
        
                <div class="technology-description">
                <span>${bioItem}</span>
                </div>`
    })

    picture.innerHTML = displayVehiclePicture
    about.innerHTML = displayVehicleAbout
}

function displaySpaceportContents(technologyVehicle) {
    let displayVehiclePicture = technologyVehicle.map(function(item) {
        const pictureItem = item.images.landscape

        return `<img src="${pictureItem}">`
    })

    let displayVehicleAbout = technologyVehicle.map(function(item) {
        const nameItem = item.name
        const bioItem = item.description

        return `<h2>THE TERMINOLOGY...</h2>

                <div class="technology-name">
                <h1>${nameItem}</h1>
                </div>
        
                <div class="technology-description">
                <span>${bioItem}</span>
                </div>`
    })

    picture.innerHTML = displayVehiclePicture
    about.innerHTML = displayVehicleAbout
}

function displayCapsuleContents(technologyVehicle) {
    let displayVehiclePicture = technologyVehicle.map(function(item) {
        const pictureItem = item.images.landscape

        return `<img src="${pictureItem}">`
    })

    let displayVehicleAbout = technologyVehicle.map(function(item) {
        const nameItem = item.name
        const bioItem = item.description

        return `<h2>THE TERMINOLOGY...</h2>

                <div class="technology-name">
                <h1>${nameItem}</h1>
                </div>
        
                <div class="technology-description">
                <span>${bioItem}</span>
                </div>`
    })

    picture.innerHTML = displayVehiclePicture
    about.innerHTML = displayVehicleAbout
}