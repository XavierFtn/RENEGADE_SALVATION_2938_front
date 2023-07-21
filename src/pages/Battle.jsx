import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import Battle from ".Battle";

const Battle = () => {
    const [battleResult, setBattleResult] = useState(null);

    // Ajoutez ici la logique pour gérer la bataille
    const handleBattle = () => {


        const randomResult = Math.random() >= 0.5; // Simulation d'un résultat aléatoire (victoire ou défaite)
        setBattleResult(randomResult ? "Win !" : "Lose !");
    };

    return (
        <div>
            <h2>Bataille</h2>
            <button onClick={handleBattle}>Start battle</button>
            {battleResult && <p>Battle Results: {battleResult}</p>}
        </div>
    );
};

export default Battle;