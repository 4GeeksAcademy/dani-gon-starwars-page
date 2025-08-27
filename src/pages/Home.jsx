import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [ characters, setCharacters ] = useState([])

	const [ planets, setPlanets ] = useState([])

	const [ vehicles, setVehicles ] = useState([])

	const getCharacters = async () => {
		const response = await fetch("https://www.swapi.tech/api/people")
		const data = await response.json()
		console.log(data);
		setCharacters(data.results)
	};

	const getPlanets = async () => {
		const response = await fetch("https://www.swapi.tech/api/planets")
		const data = await response.json();
		console.log(data);
		setPlanets(data.results);
	};

	const getVehicles = async () => {
		const response = await fetch("https://www.swapi.tech/api/vehicles")
		const data = await response.json();
		console.log(data);
		setVehicles(data.results);
	};

	useEffect(()=>{
		getCharacters()
	},[]);

	useEffect(() => {
		getPlanets()
	}, []);

	useEffect(()=>{
		getVehicles()
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="d-flex overflow-x-scroll">
				{
					characters.map((character) => {
						return (
							<div className="col-md-3" key={character.uid}>
								<div className="card">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${character.uid}.jpg?raw=true`}
									className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-tittle">{character.name}</h5>
										<button className="btn btn-primary" onClick={() => alert(`Find out more about: ${character.name}`)}>More</button>
										<button className="btn btn-secondary">Favs</button>
									</div>									

								</div>
							</div>
						)
					})
				}
			</div>

			<h1>Planets</h1>
			<div className="d-flex overflow-x-scroll">
				{
					planets.map((planet) => {
						return (
							<div className="col-md-3" key={planet.uid}>
								<div className="card">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${planet.uid}.jpg?raw=true`}
									className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-tittle">{planet.name}</h5>
										<button className="btn btn-primary" onClick={() => alert(`Find out more about: ${planet.name}`)}>More</button>
										<button className="btn btn-secondary">Favs</button>
									</div>									

								</div>
							</div>
						)
					})
				}
			</div>

			<h1>Vehicles</h1>
			<div className="d-flex overflow-x-scroll">
				{
					vehicles.map((vehicle) => {
						return (
							<div className="col-md-3" key={vehicle.uid}>
								<div className="card">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${vehicle.uid}.jpg?raw=true`}
									className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-tittle">{vehicle.name}</h5>
										<button className="btn btn-primary" onClick={() => alert(`Find out more about: ${vehicle.name}`)}>More</button>
										<button className="btn btn-secondary">Favs</button>
									</div>

								</div>
							</div>
						)
					})
				}
			</div>


		</div>
	)
}