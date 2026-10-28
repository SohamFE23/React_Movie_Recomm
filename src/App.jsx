import { useState } from 'react'
import './App.css'

const Car = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false)

  return(
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return(
    <div className="card-container"> 
      <Car title="Avengers DoomsDay" rating={5} isCool={true} />
      <Car title="Deol Band 2"/>
      <Car title="Fast and Furious"/>
    </div>
    
  )
}

export default App
