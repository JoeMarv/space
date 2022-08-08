crewCommander = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    }
]

crewSpecialist = [
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    }
]

crewPilot = [
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    }
]

crewEngineer = [
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]


const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')
const btns = document.querySelectorAll('.crew')
const commander = document.querySelector('.commander')
const specialist = document.querySelector('.specialist')
const pilot = document.querySelector('.pilot')
const engineer = document.querySelector('.engineer')
const picture = document.querySelector('.crew-picture')
const about = document.querySelector('.crew-about')


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
    displayCommanderContents(crewCommander)
  })  
  
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (commander.classList.contains('active')) {
        displayCommanderContents(crewCommander)
      }
  
      else if (specialist.classList.contains('active')) {
        displaySpecialistContents(crewSpecialist)
      }
  
      else if (pilot.classList.contains('active')) {
        displayPilotContents(crewPilot)
      }
  
      else {
        displayEngineerContents(crewEngineer)
      }
    })
  })



  function displayCommanderContents(crewCommander) {
      let displayCommanderPicture = crewCommander.map(function(item) {
          const pictureItem = item.images.png

          return `<img src="${pictureItem}">`
      })

      let displayCommanderAbout = crewCommander.map(function(item) {
          const nameItem = item.name
          const roleItem = item.role
          const bioItem = item.bio

          return `<div class="crew-rank">
                <h2>${roleItem}</h2>
                </div>
        
                <div class="crew-name">
                <h1>${nameItem}</h1>
                </div>
        
                <div class="crew-description">
                <span>${bioItem}</span>
                </div>`
      })

      picture.innerHTML = displayCommanderPicture
      about.innerHTML = displayCommanderAbout
  }


  function displaySpecialistContents(crewCommander) {
    let displayCommanderPicture = crewCommander.map(function(item) {
        const pictureItem = item.images.png

        return `<img src="${pictureItem}">`
    })

    let displayCommanderAbout = crewCommander.map(function(item) {
        const nameItem = item.name
        const roleItem = item.role
        const bioItem = item.bio

        return `<div class="crew-rank">
              <h2>${roleItem}</h2>
              </div>
      
              <div class="crew-name">
              <h1>${nameItem}</h1>
              </div>
      
              <div class="crew-description">
              <span>${bioItem}</span>
              </div>`
    })

    picture.innerHTML = displayCommanderPicture
    about.innerHTML = displayCommanderAbout
}

function displayPilotContents(crewCommander) {
    let displayCommanderPicture = crewCommander.map(function(item) {
        const pictureItem = item.images.png

        return `<img src="${pictureItem}">`
    })

    let displayCommanderAbout = crewCommander.map(function(item) {
        const nameItem = item.name
        const roleItem = item.role
        const bioItem = item.bio

        return `<div class="crew-rank">
              <h2>${roleItem}</h2>
              </div>
      
              <div class="crew-name">
              <h1>${nameItem}</h1>
              </div>
      
              <div class="crew-description">
              <span>${bioItem}</span>
              </div>`
    })

    picture.innerHTML = displayCommanderPicture
    about.innerHTML = displayCommanderAbout
}

function displayEngineerContents(crewCommander) {
    let displayCommanderPicture = crewCommander.map(function(item) {
        const pictureItem = item.images.png

        return `<img src="${pictureItem}">`
    })

    let displayCommanderAbout = crewCommander.map(function(item) {
        const nameItem = item.name
        const roleItem = item.role
        const bioItem = item.bio

        return `<div class="crew-rank">
              <h2>${roleItem}</h2>
              </div>
      
              <div class="crew-name">
              <h1>${nameItem}</h1>
              </div>
      
              <div class="crew-description">
              <span>${bioItem}</span>
              </div>`
    })

    picture.innerHTML = displayCommanderPicture
    about.innerHTML = displayCommanderAbout
}