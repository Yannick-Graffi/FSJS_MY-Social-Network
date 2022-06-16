import "../menu/menu.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import { logout } from "../../lib/Social-Network-Library";


function Menu() {
    let location = useLocation();
    let navigate = useNavigate();

    const toDeconnect = async () => {
        let result = await logout(); // Utilisation de la fonction login

        navigate("/Login", { replace: true});
        
    }

    return (  
        <div>


            { location.pathname === "/Actu"
                ?
                    <div className="menu-container">
                        <Link className="titre" to={"/Actu"}>MY Réseau Social</Link>
                        <button onClick={toDeconnect}>Se déconnecter</button>
                        
                        {/* <Link to="/Login">Se déconnecter</Link> */}

                    </div>
                :
                    <div className="menu-container">
                        <h1 className="titre">MY Réseau Social</h1>
                        <div>
                            <Link to="/Login">Se connecter</Link>
                            <Link to="/Register">Créer un compte</Link>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Menu;