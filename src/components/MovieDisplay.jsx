import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 3em;
  letterSpacing: 2px;
  color: white;
`
const Genre = styled.h2`
  font-size: 2em;
  color: white;
`

const Plot = styled.p`
  font-size: 1em;
  color: white;
`
const movieDisplayStyle = {
    background: 'black',
    border: '1px solid black',
    
    minWidth: "800px",
    textAlign: "center"
}

function MovieDisplay({ movie }) {
    const loaded = () => {
        return (
            <div style={movieDisplayStyle}>
                <Title>{movie.Title}</Title>
                <Genre>{movie.Genre}</Genre>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
                <Plot>{movie.Plot}</Plot>
            </div>
        );
    };

    const loading = () => {
        return <h1>No movie to display</h1>
    }

    return movie ? loaded() : loading()
ß
}

export default MovieDisplay