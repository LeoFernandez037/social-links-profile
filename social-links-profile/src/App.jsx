import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (      
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
        <div className="contenedorDinamico">
          <div className="contenedorImagen">
            <img className="redonda" src="https://i.ibb.co/HCXX7Vc/06b1e6e3-be27-4c7a-abd7-bbdbc4f315a1.webp" alt="image not found"></img>
          </div>
          <div className="Contenedor1">
            <h1 className="nombre">
              Jessica Randall
            </h1>
            <p className="ubicacion">
              London, United Kingdom
            </p>
            <p className= "descripcion">
              "Front-end developer and avid reader."
            </p>
            <div className="container">
              <button>
                Instagram
              </button>
              <button>
                Twitter
              </button>
              <button>
                LinkedIn
              </button>
              <button>
                Frontend Mentor
              </button>
              <button>
                GitHub
              </button>
            </div>
          </div>
        </div>
    </div>
  )
  }
export default App
