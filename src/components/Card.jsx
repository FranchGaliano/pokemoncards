
const Card = ({pokemon}) => {
  return (
    <div className="card">    
            <img id="Logo" src="src/img/Logo-Pokemon.webp" alt="Logo" />
            <h1>{pokemon.id}</h1>
            <div className="imagen" >
                <img id="Frente" src={pokemon.sprites.front_default} alt="de frente" />
                <img id="Atras"src={pokemon.sprites.back_default} alt="Por Atrás" />
            </div>    
        <h2>{pokemon.name}</h2>
        <p>Experiencia base: {pokemon.base_experience}</p>
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p> 
    </div>
  )
}

export default Card