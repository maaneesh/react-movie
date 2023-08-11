import { useState, useEffect } from 'react'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'




const containerStyle = {
  height: '100%',
  backgroundColor: "white",
  margin: "0 auto",
  maxWidth: "1200px",
  padding: "20px"
}

const innerContainer = {
  display: 'flex',
  background: 'white',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center'
}

function App() {
  const apiKey = 'e5e62db7'
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovie('shrek')
  }, [])

  return (
    <div style={containerStyle}>
      <Form movieSearch={getMovie} />
      <div style={innerContainer}>
        <MovieDisplay movie={movie} />
      </div>
    </div>

  )
}

export default App
