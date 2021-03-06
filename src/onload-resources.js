document.addEventListener('DOMContentLoaded', (event) => {
  
  checkForColors()

  let darkMode = document.getElementById('change-colors')
  let colorsStylesheet = document.getElementById('colors-stylesheet')

  darkMode.addEventListener('click', changeColors)


});

  function changeColors(colors) {
    let colorsStylesheet = document.getElementById('colors-stylesheet')
    let darkMode = document.getElementById('change-colors')
    let localStorage = window.localStorage
    if (colorsStylesheet.href.includes('sol-light.css')) {
      console.log('dark mode');
      darkMode.innerText = 'light mode'
      colorsStylesheet.href = 'sol-dark.css'
      localStorage.setItem('$colors', 'dark')
    } else {
      console.log('light mode');
      darkMode.innerText = 'dark mode'
      colorsStylesheet.href = 'sol-light.css'
      localStorage.setItem('$colors', 'light')
    }
  }

  function checkForColors() {
    let localStorage = window.localStorage

    if (localStorage['$colors'] === 'dark') {
      changeColors()
    }

  }
