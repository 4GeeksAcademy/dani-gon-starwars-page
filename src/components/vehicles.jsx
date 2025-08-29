import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const vehicleDetails = () => {

  const [vehicle, setVehicles ] = useState({})

  const params = useParams()
  console.log(params.uid);

  const getVehicles = async () => {
    const response = await fetch (`https://www.swapi.tech/api/vehicles/${params.uid}`)
    const data = await response.json()
    setVehicles(data.result.properties)
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <div className="container">
      <div className="card" style={{width: "400px"}}>

        <h1>{character.name}</h1>
        <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${params.uid}.jpg?raw=true`} />
        <div className="card-body">
          <p>Name: {vehicle.name}</p>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
          <p>Capacity: {vehicle.cargo_capacity}</p>
          <p>Cost: {vehicle.cost_in_credits}</p>
        </div>
      </div>
    </div>
  )
}