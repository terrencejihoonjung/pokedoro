import { useNavigate } from "react-router-dom";

function Pokestore({ hasPokemon }) {
    const navigate = useNavigate();

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    return (
        <div>
            pokestore
        </div>
    )
}

export default Pokestore;