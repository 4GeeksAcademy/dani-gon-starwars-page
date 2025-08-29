import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {

  const [character, setCharacter ] = useState({})

  const params = useParams()
  console.log(params.uid);

  const getCharacter = async () => {
    const response = await fetch (`https://www.swapi.tech/api/people/${params.uid}`)
    const data = await response.json()
    setCharacter(data.result.properties)
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <div className="container">
      <div className="card" style={{width: "400px"}}>

        <h1>{character.name}</h1>
        <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${params.uid}.jpg?raw=true`} />
        <div className="card-body">
          <p>Name: {character.name}</p>
          <p>Birth_year: {character.birth_year}</p>
          <p>Height: {character.height}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Vehicles: {character.vehicles}</p>
        </div>
      </div>
    </div>
  )
}
