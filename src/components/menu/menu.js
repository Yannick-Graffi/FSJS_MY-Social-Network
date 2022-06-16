import "../menu/menu.css"
import {Link} from "react-router-dom";


function Menu() {
    return (  
        <div>
            <h1>MY Réseau Social</h1>
            <div>
                <Link to="/Login">Se connecter</Link>
                <Link to="/Register">Créer un compter</Link>
            </div>
        </div>
    );
}

export default Menu;