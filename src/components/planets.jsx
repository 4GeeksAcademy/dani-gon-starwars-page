import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {

  const [planet, setPlanets ] = useState({})

  const params = useParams()
  console.log(params.uid);

  const getPlanets = async () => {
    const response = await fetch (`https://www.swapi.tech/api/planets${params.uid}`)
    const data = await response.json()
    setPlanets(data.result.properties)
  }

  useEffect(() => {
    getPlanets()
  }, [])

  return (
    <div className="container">
      <div className="card" style={{width: "300px"}}>

        <h1>{planet.name}</h1>
        <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${params.uid}.jpg?raw=true`} />
        <div className="card-body">
          <p>Name: {planet.name}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain} </p>
          <p>Diameter: {planet.diameter}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Rotation period: {planet.rotation_period} </p>
          <p>Population: {planet.population} </p>
        </div>
      </div>
    </div>
  )
}