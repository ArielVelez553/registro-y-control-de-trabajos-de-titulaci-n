// Sistema de navegación simple
function navigateTo(page) {
  const pages = {
    inicio: "../interfaces/interfazprincipal.html",
    "seleccion-tema": "../interfaces/selecciontema.html",
    "registrar-trabajo": "../interfaces/Registrodetrabajo.html",
    avances: "../interfaces/avances.html",
  }

  if (pages[page]) {
    window.location.href = pages[page]
  }
}

// Función para cerrar sesión
function logout() {
  if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
    window.location.href = "../index.html"
  }
}

// Inicializar navegación cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
  // Configurar enlaces del menú de navegación
  setupNavigationMenu()

  // Configurar botones de acciones rápidas
  setupQuickActions()
})

// Configurar menú de navegación
function setupNavigationMenu() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const text = this.textContent.trim()

      switch (text) {
        case "Inicio":
          navigateTo("inicio")
          break
        case "Selección de Tema":
          navigateTo("seleccion-tema")
          break
        case "Registrar Trabajo":
          navigateTo("registrar-trabajo")
          break
        case "Avances":
          navigateTo("avances")
          break
        case "Cerrar Sesión":
          logout()
          break
      }
    })
  })
}

// Configurar acciones rápidas
function setupQuickActions() {
  const actionButtons = document.querySelectorAll(".action-btn")

  actionButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      const buttonText = this.textContent.trim()

      switch (buttonText) {
        case "Proponer Tema":
          navigateTo("seleccion-tema")
          break
        case "Subir Documento":
          navigateTo("registrar-trabajo")
          break
        case "Ver Progreso":
          navigateTo("avances")
          break
      }
    })
  })
}

// Funciones adicionales para navegación desde index.html
function navigateToLogin() {
  window.location.href = "interfaces/iniciarsesion.html"
}

function navigateToRegister() {
  window.location.href = "interfaces/registrarse.html"
}

// Configurar navegación para la página index
function setupIndexNavigation() {
  // Verificar si estamos en la página index
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    
    // Configurar enlaces de la barra de navegación
    const loginLink = document.querySelector('.auth-link.login')
    const registerLink = document.querySelector('.auth-link.register')
    
    if (loginLink) {
      loginLink.addEventListener('click', function(e) {
        e.preventDefault()
        navigateToLogin()
      })
    }
    
    if (registerLink) {
      registerLink.addEventListener('click', function(e) {
        e.preventDefault()
        navigateToRegister()
      })
    }
    
    // Configurar botón "Comenzar Ahora" del hero
    const startButton = document.querySelector('.cta-button.primary')
    if (startButton && startButton.textContent.trim() === 'Comenzar Ahora') {
      startButton.addEventListener('click', function(e) {
        e.preventDefault()
        navigateToLogin()
      })
    }
    
    // Configurar botón "Registrarse Ahora" del final
    const finalRegisterButton = document.querySelector('.final-cta .cta-button.primary.large')
    if (finalRegisterButton) {
      finalRegisterButton.addEventListener('click', function(e) {
        e.preventDefault()
        navigateToRegister()
      })
    }
  }
}

// Modificar el evento DOMContentLoaded existente
document.addEventListener("DOMContentLoaded", () => {
  // Configurar enlaces del menú de navegación (código existente)
  setupNavigationMenu()
  
  // Configurar botones de acciones rápidas (código existente)
  setupQuickActions()
  
  // Agregar configuración para index.html
  setupIndexNavigation()
})