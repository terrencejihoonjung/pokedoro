import { useNavigate } from "react-router-dom";

function Pokeboard({ hasPokemon }) {
    const navigate = useNavigate();

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    return (
        <div>
            pokeboard
        </div>
    )
}

export default Pokeboard;