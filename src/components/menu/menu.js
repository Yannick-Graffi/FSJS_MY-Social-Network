import "../menu/menu.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import { logout } from "../../lib/Social-Network-Library";


function Menu() {
    let location = useLocation();
    let navigate = useNavigate();

    const toDeconnect = async () => {
        let result = await logout(); // Utilisation de la fonction logout

        navigate("/Login", { replace: true}); // retour à la page de connexion  
    }

    return (  
        <div>

            { location.pathname === "/Actu" || location.pathname === "/Profil"
                ?
                    <div className="menu-container">
                        <Link className="titre" to={"/Actu"}>MY Réseau Social</Link>
                        <div>
                            <Link className="link" to="/Profil">Mon profil</Link>
                            <button onClick={toDeconnect}>Se déconnecter</button>
                        </div>

                    </div>
                :
                    <div className="menu-container">
                        <div>
                            <h1 className="titre">MY Réseau Social</h1>
                        </div>
                        <div>
                            <Link className="link" to="/Login">Se connecter</Link>
                            <Link className="link" to="/Register">Créer un compte</Link>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Menu;