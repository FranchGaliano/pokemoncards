const Card = ({pokemon}) => {
    console.log(pokemon)

  return (
    <div className="card">   
        <div id="card-cabecera">
            <h2 id="card-nro">{pokemon.id}</h2>
            
        </div> 
        <div className="imagen" >
            <img id="card-imagen-frente" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </div>    
        <h1>{pokemon.name}</h1>
        <p>Experiencia base: {pokemon.base_experience}</p>
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p> 

        <p id="autor">CSS: Francesco Galiano Abanto</p>
    </div>
  )
}

export default Card